class Jugador{
    constructor(nombre){
        this.nombre = nombre;
        this.ficha = null;
    }
    
    setFicha(color){
        this.ficha = new Ficha(color);
    }
    crearFicha(x,y){
        let canvas =document.getElementById('canvas');
        let ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(x,y,this.radio,0,Math.PI*2); 
        ctx.stroke();
        ctx.fillStyle = this.ficha.color;
        ctx.fill();
    }
 
}
