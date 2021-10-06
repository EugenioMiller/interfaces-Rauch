//Inicialización de jugadores
/*document.addEventListener('DOMContentLoaded', ()=> {
    let nombre1 = prompt("Indique el nombre del jugador 1");
    let j1 = new Jugador(nombre1);
    let nombre2 = prompt("Indique el nombre del jugador 2");
    let j2 = new Jugador(nombre2);
   
})*/ 


let btn4=document.getElementById("btn-4");
let btn5=document.getElementById("btn-5");
let btn6=document.getElementById("btn-6");

btn4.addEventListener('click',function(){
    nuevoTablero(btn4.value);
});
btn5.addEventListener('click',function(){
    nuevoTablero(btn5.value);
});
btn6.addEventListener('click',function(){
    nuevoTablero(btn6.value);
});

function nuevoTablero(valor){
    let t1=new Tablero(valor);
    t1.crearTablero();
    let botones = document.getElementById('botones');
    botones.setAttribute("hidden", "");
    let f1 = new Ficha();
    let f2 = new Ficha();
    let f3 = new Ficha();
    let f4 = new Ficha();
    f1.mostrarFicha(25, 25, 'red');
    f2.mostrarFicha(125, 25, 'green');
    f3.mostrarFicha(225, 25, 'blue');
    f4.mostrarFicha(325, 25, 'black');
}