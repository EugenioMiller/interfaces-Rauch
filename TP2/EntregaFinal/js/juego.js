let juego; //en esta variable se instancia el tablero
let wh = []; //guardo el ancho y alto del canvas
let x = []; //guardo el valor x final de cada columna
let mouse = false;
let turno;
let cantFichas;
let setTime;

let jugadorJ1 = {
    ficha: null,
    xv: 0,
    yv: 0,
    turnos: 0
  };
let jugadorJ2 = {
    ficha: null,
    xv: 0,
    yv: 0,
    turnos: 0
};

//Tiempo de juego 
function finDeTiempo(){

    document.getElementById('tiempoLimite').innerHTML = tiempo;
  
    if(tiempo == 0){
      endGame();
      
    }
    else{
      tiempo = tiempo - 1;
      setTime=setTimeout(finDeTiempo, 1000);
    }
}

//Función que detiene el tiempo
function detenerTiempo() {
    clearTimeout(setTime);
}

let iniciar = document.getElementById("iniciar");

iniciar.addEventListener("click", function (e) {
    asignarImagen();
    iniciarJuego();
    juego.limpiar();
});

let btnReinicioGanador=document.getElementById("reinicioGanador");
btnReinicioGanador.addEventListener("click",function(e){
    reiniciarJuego()});
let btnReinicioTiempo=document.getElementById("reinicioTiempo");
btnReinicioTiempo.addEventListener("click",function(e){
    reiniciarJuego()});


// Inicia el juego 
function iniciarJuego() {
    wh = levantarCanvas();
    juego = new Tablero(wh[0], wh[1]); //instancia de la clase Tablero
    jugadorJ2.ficha = juego.fichaJ2;
    jugadorJ2.xv = juego.fichaJ2.xv;
    jugadorJ2.yv = juego.fichaJ2.yv;
    jugadorJ1.ficha = juego.fichaJ1;
    jugadorJ1.xv = juego.fichaJ1.xv;
    jugadorJ1.yv = juego.fichaJ1.yv;
    turno = jugadorJ1.ficha;// seteo a j1 por defecto en el turno para q el inicie el juego
    tiempo=500;
    seleccionTurno();
    cantFichas= 42;
    jugadorJ1.turnos=cantFichas/2;
    jugadorJ2.turnos=cantFichas/2;
    reloj.classList.remove("hidden");
    finDeTiempo();
    
    //una vez instanciado el tablero lo mapeamos para detectar las columnas
    x[0] = juego.posTablero + juego.colW;
    for (let i = 1; i < juego.columnas; i++) {
      x[i] = x[i - 1] + juego.anchoCol;
    }
}

// Detectar que el click se de dentro de la ficha del jugador
canvas.onmousedown = function (e) {
    let rect = canvas.getBoundingClientRect();
    let xClick = e.clientX - rect.left; //posición x dentro del elemento.
    let yClick = e.clientY - rect.top; //posición y dentro del elemento.
    if (
      turno.xv < xClick &&
      turno.xv + turno.altoFila > xClick &&
      turno.yv < yClick &&
      turno.yv + turno.altoFila > yClick
    ) {  
      mouse = true;
    }
};

// Metodo que se dispara al mover la ficha 
canvas.onmousemove = function (e) {
    let rect = canvas.getBoundingClientRect();
    let x2 = e.clientX - rect.left;
    let y2 = e.clientY - rect.top;
    if (mouse === true) {
      turno.xv = x2 - turno.altoFila / 2; //agarrar la ficha desde el centro
      turno.yv = y2 - turno.altoFila / 2;
      juego.limpiar(); //limpia el tablero y lo vuelve a dibujar para no dibujar un "camino" fichas
    }
};

// Se dispara cuando se suelta la ficha, si la ficha no esta dentro del tablero vuelve a su posicion
// Si la columna esta llena, se pide que elija otra
// Si hay ganador llama a la funcion que muestra al ganador, sino cambia de turno

canvas.onmouseup = function (e) {
    let xClick = e.offsetX;
    let resultInsert, colInsert;
  
    if (
      mouse === true &&
      xClick > juego.posTablero &&
      xClick < wh[0] - juego.posTablero
    ) {
  
      //valido posicion dentro del tablero
      for (let i = 0; i < x.length; i++) {
        //recorre por columnas
        if (xClick < x[i]) {
          colInsert = i;
          resultInsert = juego.insertarFicha(colInsert, turno.jugador);
          break;
        }
      }
      switch (resultInsert) {
        case -1:
          alert("No hay lugar en esa columna, elija otra")
          break;
        default:
          if(juego.verificarGanador(colInsert, resultInsert)){
            ganador();
          }else{
            cambiarTurno();
          }
          break;
      }
      mouse = false;
    }
    mouse = false;
    restaurarFichas();
    juego.limpiar();
};

// Cambia el turno y disminuye la cantidad de fichas de cada jugador
function cambiarTurno() {
  
    if (turno.jugador == "j1") {
      turno = jugadorJ2.ficha;
      jugadorJ1.turnos--;
      
    }
    else if (turno.jugador == "j2") {
      turno = jugadorJ1.ficha;
      jugadorJ2.turnos--;
      
    }
}

// dibuja el texto que se encuentra en el lienzo 
// Como asi tambien el turno y la cantidad de fichas restantes
function seleccionTurno() {
    let xv;
    let yv;
    let fichaJ1;
    let fichaJ2;
  
    if(turno.jugador==="j1"){
      xv=jugadorJ1.xv;
      yv=jugadorJ1.yv / 3;
      fichaJ1=jugadorJ1.turnos;
      fichaJ2=jugadorJ2.turnos;
    }
    else{
      xv=jugadorJ2.xv;
      yv=jugadorJ2.yv / 3;
      fichaJ2=jugadorJ2.turnos;
      fichaJ1=jugadorJ1.turnos;
    }

    imprimirTexto(jugadorJ1.xv, (jugadorJ1.yv -10), "J1","white", "black");
    imprimirTexto(jugadorJ2.xv, (jugadorJ1.yv -10), "J2","white", "black" );
    imprimirTexto(xv,yv,"Turno","green", "white");
    imprimirTexto(jugadorJ1.xv,jugadorJ1.yv+200,"Fichas: ","black", "white");
    imprimirTexto(jugadorJ2.xv,jugadorJ2.yv+200,"Fichas: ","black", "white");
    imprimirTexto((jugadorJ1.xv+100),(jugadorJ1.yv+200),fichaJ1,"red", "red");
    imprimirTexto((jugadorJ2.xv+100),(jugadorJ2.yv+200),fichaJ2,"red", "red");
}

// Retorna las fichas a su posicion original si no las ubica en el tablero
function restaurarFichas() {
    jugadorJ1.ficha.xv = jugadorJ1.xv;
    jugadorJ1.ficha.yv = jugadorJ1.yv;
    jugadorJ2.ficha.xv = jugadorJ2.xv;
    jugadorJ2.ficha.yv = jugadorJ2.yv;
}

// Devuelve las referencias a los elementos por su  id
// Establece el valor del atributo class del elemento (agrega o elimina) segun corresponda 
// Para mostrar al ganador del juego
function ganador(){
    canvas.className += " hidden";
    let cartelGanador=document.getElementById("ganadorContainer");
    cartelGanador.classList.remove("hidden");
    reloj.className += " hidden";
    
  
    if(turno.jugador == "j1"){
      document.getElementById('textoGanador').innerHTML = "Ganador J1";
  
    }
    else{
      document.getElementById('textoGanador').innerHTML = "Ganador J2";
    }
}

function endGame(){
    canvas.className += " hidden"; 
    let finJuegoContainer=document.getElementById("finJuegoContainer");
    finJuegoContainer.classList.remove("hidden");
  
    document.getElementById('textoFinJuego').innerHTML = "se ha acabado el tiempo o te has quedado sin fichas";
}

function reiniciarJuego(){
    canvas.className += " hidden";
    if(!finJuegoContainer.classList.contains("hidden")){
      finJuegoContainer.className += " hidden";
    }
    let cartelGanador=document.getElementById("ganadorContainer");
    cartelGanador.className += " hidden";
    detenerTiempo();
  }