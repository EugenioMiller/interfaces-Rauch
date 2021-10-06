
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
    let f1 = new Ficha(125, 75);
    f1.crearFicha();
    t1.pintarCirculo(125, 75, f1);
}