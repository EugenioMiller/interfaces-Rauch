'use strict';

let personaje = document.getElementById("personaje");
let kunai = document.getElementById("kunai");
let saltar = false;
let muerto = false;

document.addEventListener('keydown', function(event){
    if(event.keyCode === 32){
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

        //Pregunto si la ninja colisiona con el kunai
        if( personajePos.left<=kunaiWidht && 
            personajeWidht>=kunaiPos.left && 
            personajeHeight>=kunaiPos.top && 
            personajePos.top <= kunaiHeight  ){ 
                muerto = true;
                finDeJuego(muerto);     
        }
    }
}

function finDeJuego(muerto){
    if (muerto){
        //Cambiar animación del personaje (die)
        //Mostrar en pantalla los puntos obtenidos
        detenerAnimaciones();
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
    personaje.style.animationPlayState = "paused";
    kunai.style.animationPlayState = "paused";
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