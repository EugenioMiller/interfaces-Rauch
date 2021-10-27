'use strict';
let inicio=document.getElementById("inicio");
let btn=document.getElementById("jugar");
let reglas= document.getElementById("mostrar");
let btnReglas=document.getElementById("reglas");
let shuriken = document.getElementById("shuriken");
let piedra=document.getElementById("piedra");
btnReglas.addEventListener('click', function(){
  reglas.style.display='block';
})
let contenedor =document.getElementById("contenedor");
btn.addEventListener('click',iniciar);
function iniciar(){
   inicio.style.display = 'none';
   contenedor.style.display='block';
let personaje = document.getElementById("personaje");
let kunai = document.getElementById("kunai");
//let died=document.getElementById("died");
let saltar = false;
let muerto = false;
document.addEventListener('keydown', function(event){
    if(event.keyCode === 32 && !muerto){
        saltar = true;
        jump(saltar);
    }

});

//Función para que el personaje salte al tocar barra espaciadora
function jump(saltar){
    if(saltar){
    personaje.setAttribute("class","jump");
    }
    else
    personaje.setAttribute("class","run");    
}
//Una vez finalizada la animación de salto, continua corriendo  
personaje.addEventListener("animationend", ()=>{
    saltar = false;
    jump(saltar);
});

//-----------------------------------------------------------------

setInterval(detectarColision,500); 
//Detecta colisiones del personaje 
function detectarColision(){ 
    if (muerto == false){
                
        let personajePos = personaje.getBoundingClientRect();       
        let kunaiPos =  kunai.getBoundingClientRect();
        let personajeWidht = personajePos.left + personajePos.width;
        let personajeHeight = personajePos.top + personajePos.height;
        let kunaiWidht = kunaiPos.left + kunaiPos.width;
        let kunaiHeight = kunaiPos.top + kunaiPos.height; 
        let piedraPos=piedra.getBoundingClientRect();
        let piedraWidht = piedraPos.left + piedraPos.width;
        let piedraHeight = kunaiPos.top + piedraPos.height;


        //Pregunto si la ninja colisiona con el kunai
        if( personajePos.left<=kunaiWidht && 
            personajeWidht>=kunaiPos.left && 
            personajeHeight>=kunaiPos.top && 
            personajePos.top <= kunaiHeight  ){ 
                muerto = true;
                finDeJuego(muerto);  
        }
        //Pregunto si la ninja colisiona con la piedra
        if( personajePos.left<=piedraWidht && 
            personajeWidht>=piedraPos.left && 
            personajeHeight>=piedraPos.top && 
            personajePos.top <= piedraHeight  ){ 
                muerto = true;
                finDeJuego(muerto);  
        }
    }
}

function finDeJuego(muerto){
    if (muerto){
        personaje.setAttribute("class","died");
        personaje.addEventListener("animationend",()=>{
            detenerAnimaciones();
        });
        //Cambiar animación del personaje (die)

        //Mostrar en pantalla los puntos obtenidos
        //detenerAnimaciones();
        //Agregar botón para volver a jugar
    }
    else {
        detenerAnimaciones();
        //Mostrar cartel de que finalizó el tiempo
        //Mostrar puntaje obtenido
        //Mostrar botón para volver a jugar 
    }
}

function detenerAnimaciones(){
    personaje.setAttribute("class","died");
    personaje.style.animationPlayState = "paused";
    kunai.style.animationPlayState = "paused";
    shuriken.style.animationPlayState = "paused";
    piedra.style.animationPlayState="paused";
    document.getElementById("fondo1").style.animationPlayState = "paused";
    document.getElementById("fondo2").style.animationPlayState = "paused";
    document.getElementById("fondo3").style.animationPlayState = "paused";
    document.getElementById("fondo4").style.animationPlayState = "paused";
    document.getElementById("fondo5").style.animationPlayState = "paused";
    document.getElementById("fondo6").style.animationPlayState = "paused";
    document.getElementById("fondo7").style.animationPlayState = "paused";
    document.getElementById("fondo8").style.animationPlayState = "paused";
    document.getElementById("fondo9").style.animationPlayState = "paused";
    document.getElementById("fondo10").style.animationPlayState = "paused";
    document.getElementById("fondo11").style.animationPlayState = "paused";
    
    
}
}