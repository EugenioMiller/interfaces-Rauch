//Instanciamos jugadores
let j1 = new Jugador("J1");
let j2 = new Jugador("J2");
let tablero;


//Los jugadores deciden qué modo de juego van a jugar
document.getElementById("btn4").addEventListener('click', function(){
    seleccionarModoJuego(btn4.value);
});
document.getElementById("btn5").addEventListener('click', function(){
    seleccionarModoJuego(btn5.value);
});
document.getElementById("btn6").addEventListener('click', function(){
    seleccionarModoJuego(btn6.value);
});

function seleccionarModoJuego(valor){
    tablero = new Tablero(valor);
    tablero.crearTablero(valor);
    document.getElementById("botones").setAttribute("hidden", "");
}


//Los jugadores seleccionan la ficha con la que van a jugar 
document.getElementById("c1").addEventListener('click', function(){
    elegirFicha(c1.value);
    this.setAttribute("hidden", "");
});
document.getElementById("c2").addEventListener('click', function(){
    elegirFicha(c2.value);
    this.setAttribute("hidden", "");
});
document.getElementById("c3").addEventListener('click', function(){
    elegirFicha(c3.value);
    this.setAttribute("hidden", "");
});

function elegirFicha(color){
    if (j1.ficha === null){
        j1.setFicha(color);
    }
    else {
        j2.setFicha(color);
        document.getElementById("ficha").setAttribute("hidden", "");
    }
}