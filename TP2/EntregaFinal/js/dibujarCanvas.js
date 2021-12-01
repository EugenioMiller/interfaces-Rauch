let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let reloj = document.getElementById("tiempo");
let img1;
let img2;
let img = new Image();
img.src = "img/none.png";

//Asignar ficha a los jugadores
function asignarImagen() {
    img1 = new Image();
    img1.src = "img/imgeFicha1.png";
    img2=new Image();
    img2.src = "img/imgeFicha2.png";
}

//Dibuja el tablero y las fichas 
function dibujarFichas(x1, y1, altoFila, jugador) {
    let source;
    switch (jugador) {
      case "none":
        source = img;
      break;
      case "j1":
        source = img1;
      break;
      case "j2":
        source = img2;
      break;
    }

    ctx.drawImage(source, x1, y1, altoFila, altoFila);
}

function levantarCanvas() {
  canvas.classList.remove("hidden");
  reloj.classList.remove("hidden");
  ctx.translate(0.5, 0.5);
  canvas.width = (100 * window.innerWidth) / 100;
  canvas.height =((100 * window.innerHeight) / 100 || 766) - 4;
  let wh = [canvas.width, canvas.height];
  return wh;
}

//Escribir en el lienzo
function imprimirTexto(xv, yv, text, colorStroke) {
  ctx.beginPath();
  ctx.font = "15px Arial"; //estilo de texto
  ctx.textAlign = "center";
  ctx.fillText(text, xv, yv); //texto con método fill
  ctx.strokeStyle = colorStroke;
  ctx.strokeText(text, xv, yv);
  ctx.stroke();
}

// Limpiar canvas
function limpiarCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); 
}