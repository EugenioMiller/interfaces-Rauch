//Inicialización de jugadores
document.addEventListener('DOMContentLoaded', () =>{
    let nombre1 = prompt("Indique el nombre del jugador 1");
    let j1 = new Jugador(nombre1);
    console.log(j1);
    let nombre2 = prompt("Indique el nombre del jugador 2");
    let j2 = new Jugador(nombre2);



//


let btn4=document.getElementById("btn-4");
let btn5=document.getElementById("btn-5");
let btn6=document.getElementById("btn-6");


btn4.addEventListener('click',function(){
    nuevoTablero(btn4.value);
    j1.seleccionarFicha();
    console.log(j1);
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
    
}

});
