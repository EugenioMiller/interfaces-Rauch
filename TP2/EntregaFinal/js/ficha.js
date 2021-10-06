class Ficha{
    constructor(){
        this.radio = 22;
    }

    /*constructor(x, y){
        this.radio = 22;
        this.x = x;
        this.y = y;
    }*/

    crearFicha(){
        let canvas =document.getElementById('canvas');
        let ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radio,0,Math.PI*2,true); 
        ctx.stroke();
        ctx.fillStyle = "#6ab150";
        ctx.fill();
    }

    mostrarFicha(x, y, color){
        let canvas =document.getElementById('canvas');
        let ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(x,y,this.radio,0,Math.PI*2,true); 
        ctx.stroke();
        ctx.fillStyle = color;
        ctx.fill();
    }
}