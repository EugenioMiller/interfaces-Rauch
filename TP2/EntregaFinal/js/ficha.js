class Ficha{
    constructor(valor){
        this.radio = 22;
        this.color=valor;
    }
    crearFicha(x,y,color){
        let canvas =document.getElementById('canvas');
        let ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(x,y,this.radio,0,Math.PI*2); 
        ctx.stroke();
        ctx.fillStyle = color;
        ctx.fill();
    }
}