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
                    alert("No se acepta el tamaño de la imagen.");
                    return;
                }
                else {
                    img.width = width;
                    img.height = height;
                }
                ctx.drawImage(img, 0, 0);
            }
            img.src = event.target.result;
        }
        reader.readAsDataURL(cargar.files[0]);
}
