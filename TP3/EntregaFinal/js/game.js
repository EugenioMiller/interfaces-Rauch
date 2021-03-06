'use strict';

//Inicializamos variables.
let inicio=document.getElementById("inicio");
let btn=document.getElementById("jugar");
let reglas= document.getElementById("mostrar");
let btnReglas=document.getElementById("reglas");
let shuriken = document.getElementById("shuriken");
let piedra=document.getElementById("piedra");
let puntaje = 0;
let puntos = document.getElementById("puntos");
let final = document.getElementById("fin");

//Agregamos evento al botón de reglas
btnReglas.addEventListener('click', function(){
  reglas.style.display='block';
})

//Agregamos evento de inicio de juuego al botón iniciar
let contenedor =document.getElementById("contenedor");
btn.addEventListener('click',iniciar);
function iniciar(){
   inicio.style.display = 'none';
   contenedor.style.display='block';

//Inicializamos nuevas variables 
let personaje = document.getElementById("personaje");
let kunai = document.getElementById("kunai");
let saltar = false;
let muerto = false;
puntos.innerHTML = `Puntuación : ${puntaje}`;
//Agregamos funcionalidad a la tecla espacio
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

//Detectamos si existe colisiones
setInterval(detectarColision,500); 
//Función que detecta colisiones del personaje 
function detectarColision(){ 
    if (muerto == false){
                
        //Inicialización de variables necesarias
        let personajePos = personaje.getBoundingClientRect();       
        let kunaiPos =  kunai.getBoundingClientRect();
        let shurikenPos = shuriken.getBoundingClientRect();
        let piedraPos=piedra.getBoundingClientRect();
        let personajeWidht = personajePos.left + personajePos.width;
        let personajeHeight = personajePos.top + personajePos.height;
        let kunaiWidht = kunaiPos.left + kunaiPos.width;
        let kunaiHeight = kunaiPos.top + kunaiPos.height; 
        let piedraWidht = piedraPos.left + piedraPos.width;
        let piedraHeight = piedraPos.top + piedraPos.height;
        let shurikenWidht = shurikenPos.left + shurikenPos.width;
        let shurikenHeight = shurikenPos.top + shurikenPos.height;  


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
        //Pregunto si la ninja colisiona con el shuriken
        if( personajePos.left<=shurikenWidht && 
            personajeWidht>=shurikenPos.left && 
            personajeHeight>=shurikenPos.top && 
            personajePos.top <= shurikenHeight  ){ 
                puntaje+=1;
                acutualizarPuntuacion(puntaje); 

        }
    
}

//Función que finaliza el juego
function finDeJuego(muerto){
    if (muerto){
        //Cambiar animación del personaje (die)
        personaje.setAttribute("class","died");
        //Detener la animacion
        personaje.addEventListener("animationend",()=>{
            detenerAnimaciones();
        });
        
    }
    else {
        detenerAnimaciones();
    }
}

//Función que detiene las animaciones, una vez que el juego ha terminado
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
    alert("Ha muerto, su puntuación final es de: " + puntaje + "\nReiniciar juego");
    location.reload();
}
}

//Función que actualiza la puntuación del jugador
function acutualizarPuntuacion(){
    puntos.innerHTML = `Puntuación : ${puntaje}`;
}
}

