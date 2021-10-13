//Instanciamos jugadores
let j1 = new Jugador("J1");
let j2 = new Jugador("J2");
let tablero;
let juego = new Juego(j1,j2);
//Variables cuenta regresiva
let time_minutes = 5; // Minutos
let time_seconds = 30; // Segundos

let duration = time_minutes * 60 + time_seconds;


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
    //una vez que elije el table muestra el color de ficha a jugar
    document.getElementById("ficha").style.display='block';
    juego.setTablero(tablero);
    juego.setMatriz(tablero.matriz);
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
        document.getElementById("ficha").style.display='none';
        let btn=document.getElementById("inicio");
        btn.innerHTML=`<button id="iniciar">Comenzar</button>`;
        document.getElementById("iniciar").addEventListener('click', function(){
            juego.iniciarJuego();
            this.setAttribute("hidden", "");
            let reset = document.getElementById("reset");
            reset.innerHTML = `<button id="reiniciar">Reiniciar</button>`;
            document.getElementById("reiniciar").addEventListener('click', reiniciar);
            let time = document.getElementById("timer");
            time.innerHTML = ` <p id="reloj" class="timer  text-center mb-2"></p>`
            let reloj = document.getElementById("reloj");
            reloj.innerHTML= `${paddedFormat(time_minutes)}:${paddedFormat(time_seconds)}`
            startCountDown(--duration, reloj);
        });
    }
}

function paddedFormat(num) {
    return num < 10 ? "0" + num : num; 
}

function startCountDown(duration, reloj) {

    let secondsRemaining = duration;
    let min = 0;
    let sec = 0;

    let countInterval = setInterval(function () {

        min = parseInt(secondsRemaining / 60);
        sec = parseInt(secondsRemaining % 60);

        reloj.textContent = `${paddedFormat(min)}:${paddedFormat(sec)}`;
        if(min === 0 && sec === 0){
            alert("Se acabó el tiempo");
            reiniciar();
        }

        secondsRemaining = secondsRemaining - 1;
        if (secondsRemaining < 0) { clearInterval(countInterval) };

    }, 1000);
}


function reiniciar(){
    location.reload();
}
