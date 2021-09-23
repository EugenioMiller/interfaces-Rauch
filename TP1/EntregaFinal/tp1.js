let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d'); 
let down = false;
let xPos = 0;
let yPos = 0; 
let rect = canvas.getBoundingClientRect();
let limpiar = document.getElementById('limpiar');
let color = 'black';
let goma = document.getElementById('goma');
let width = canvas.width;
let height = canvas.height;
let cargar = document.getElementById('subir');



//Subir una imagen
cargar.addEventListener('change', cargarImagen);


//Llama a la función de borrar el canvas
limpiar.addEventListener('click', borrarCanvas);
goma.addEventListener('click',borrar);


//Filtros
document.getElementById("negativo").addEventListener('click', filtroNegativo);
document.getElementById("binarizacion").addEventListener('click', filtroGrises);
document.getElementById('brillo').addEventListener('click', aplicarBrillo);

//Creamos los eventos
canvas.addEventListener('mousemove', movimientoMouse);
canvas.addEventListener('mousedown', apretarClick);
canvas.addEventListener('mouseup', soltarClick);
function borrar(e){
        ctx.beginPath();
        color='white';
        grosor=8;
        ctx.lineCap = 'round';
        ctx.strokeStyle = color;
        ctx.lineWidth = grosor;
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.closePath();

}
function movimientoMouse(e){

    if (down === true){
        dibujar(xPos, yPos, e.clientX - rect.left, e.clientY - rect.top);
        xPos = e.clientX - rect.left;
        yPos = e.clientY - rect.top;
    }
}

function apretarClick(e){
    xPos = e.clientX - rect.left;
    yPos = e.clientY - rect.top;
    down = true;
}

function soltarClick(e){
    if (down === true){
        dibujar(xPos, yPos, e.clientX - rect.left, e.clientY - rect.top);
        xPos = 0;
        yPos = 0;
        down = false;
    }
}

function borrarCanvas(){ 
    canvas.width = 800;
    canvas.height = 500;
}

function defColor(c){
    color = c;
}

function defGrosor(g){
    grosor = g;
}

function dibujar(x1, y1, x2, y2){
    ctx.beginPath();
    ctx.lineCap = 'round';
    ctx.strokeStyle = color;
    ctx.lineWidth = grosor;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
}

//Función para cargar imagen
function cargarImagen(){
    let reader = new FileReader();
        reader.onload = function (event) {
            let img = new Image();
            img.onload = function () {
                if (img.width > window.screen.width || img.height > window.screen.height) {
                    alert("El tamaño de la imagen es muy grande.");
                    return;
                }
                else {
                    canvas.width = img.width;
                    canvas.height = img.height;
                }
                width = canvas.width;
                height = canvas.height;
                ctx.drawImage(img, 0, 0);
            }
            img.src = event.target.result;
        }
        reader.readAsDataURL(cargar.files[0]);
}

//Tomar valores
function getRed(index,imageData){

    return  imageData.data[index + 0];
}

function getGreen(index,imageData){
    return  imageData.data[index + 1];
}
    
function getBlue(index,imageData){
    return  imageData.data[index + 2];
}

function getAlpha(index,imageData){
    return  imageData.data[index + 3];
}

//Funcion de setPixel
//reemplaza el rgb un pixel de una imagen
function setPixel(imageData, x, y, r, g, b) {
    let index = (x + y * imageData.width) * 4;
    imageData.data[index + 0] = r;
    imageData.data[index + 1] = g;
    imageData.data[index + 2] = b;
}


//Funciones de filtros

//Filtro negativo
function filtroNegativo(){
    
    let imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
    let w = imageData.width;
    let h = imageData.height;
    for (let x = 0; x < w; x++){
        for (let y = 0; y < h; y++){
            let index = (x + w * y)*4;
            let r = getRed(index,imageData);
            let g = getGreen(index,imageData);
            let b = getBlue(index,imageData);
            
            imageData.data[index + 0] = 255 - r;
            imageData.data[index + 1] = 255 - g;
            imageData.data[index + 2] = 255 - b;
        
        }
    }
    ctx.putImageData(imageData, 0, 0);          
}

//Filtro de escala de grises
function filtroGrises() {
    let a = 255;
    let imageData = ctx.getImageData(0, 0, width, height);
    aplicarGrises(imageData);
    ctx.putImageData(imageData, 0, 0) * 4;
}

//Función para aplicar escala de grises
function aplicarGrises(imageData) {
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let index = (x + y * imageData.width) * 4;
            var grey = (imageData.data[index + 0] + imageData.data[index + 1] + imageData.data[index + 2]) / 3;
            let r = grey;
            let g = grey;
            let b = grey;
            setPixel(imageData, x, y, r, g, b);

        }
    }
}


//Función para aplicar brillo a la imagen
function aplicarBrillo() {
    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let brillo = 100 - parseInt(document.getElementById("porcentaje").value);
    for (let y = 0; y < imageData.height; y++) {
            for (let x = 0; x < imageData.width; x++) {
                    let index = (x + y * imageData.width) * 4;
                    let r = getRed(index, imageData);
                    let g = getGreen(index, imageData);
                    let b = getBlue(index, imageData);
                    r = (r * 100) / brillo;
                    g = (g * 100) / brillo;
                    b = (b * 100) / brillo;
                    imageData.data[index + 0] = r;
                    imageData.data[index + 1] = g;
                    imageData.data[index + 2] = b;
            }
    }
    ctx.putImageData(imageData, 0, 0);
}