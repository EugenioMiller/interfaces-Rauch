class Jugador{
    constructor(nombre){
        this.nombre = nombre;
        this.ficha = null;
    };
    
    setFicha(color){
        this.ficha = new Ficha(color);
    };
    insertarFicha(x,y,color){
        console.log("vamos");
        console.log(x+y+color);
        let canvas =document.getElementById('canvas');
        let ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(x,y,this.ficha.radio,0,Math.PI*2); 
        ctx.stroke();
        ctx.fillStyle =color;
        ctx.fill();
    };
 
}
