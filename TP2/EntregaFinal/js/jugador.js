class Jugador{
    constructor(nombre){
        this.nombre = nombre;
        this.ficha=ficha;
    }
    
    seleccionarFicha(){
        alert(this.nombre+ "elija ficha");
        this.ficha.value= crearBotones();
        console.log("la ficha es " + this.ficha.value);
    }
}

function crearFicha(valor){
    let f=new Ficha(valor);
    return f;
}


function crearBotones(){
    let ficha;

    let btnC1=document.getElementById("btn-c1");
    let btnC2=document.getElementById("btn-c2");
    let btnC3=document.getElementById("btn-c3");
    btnC1.addEventListener('click',function(){
        ficha = crearFicha(btnC1.value);
        console.log(btnC1.value);
        btnC1.setAttribute("hidden", "");
        //return ficha;
    });
    btnC2.addEventListener('click',function(){
        ficha = crearFicha(btnC2.value);
        btnC2.setAttribute("hidden", "");
        return ficha;
    });
    btnC3.addEventListener('click',function(){
        ficha = crearFicha(btnC3.value);
        btnC3.setAttribute("hidden", "");
        return ficha;
    });
}