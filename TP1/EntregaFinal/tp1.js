let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d'); 
let down = false;
let xPos = 0;
let yPos = 0; 
let rect = canvas.getBoundingClientRect();
let limpiar = document.getElementById('limpiar');
let color = 'black';
let goma = document.getElementById('goma');

//Llama a la función de borrar el canvas
limpiar.addEventListener('click', borrarCanvas);

//Llama a la función de borrado
goma.addEventListener('click', borrar);

//Creamos los eventos
canvas.addEventListener('mousemove', movimientoMouse);
canvas.addEventListener('mousedown', apretarClick);
canvas.addEventListener('mouseup', soltarClick);

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
    canvas.height = 600;
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