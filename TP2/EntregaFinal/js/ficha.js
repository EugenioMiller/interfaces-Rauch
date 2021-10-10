let lastClickedFigure = null;
let isMouseDown = false;

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

    mover(){
        let canvas =document.getElementById('canvas');
        let ctx = canvas.getContext('2d');
        canvas.addEventListener('mousedown', this.onMouseDown, false);
        canvas.addEventListener('mouseup', this.onMouseUp, false);
        canvas.addEventListener('mousemove', this.onMouseMove, false);
    }

    onMouseDown(e){
        isMouseDown = true;
        
        if(e.layerX > 0 && e.layerX < 50 && e.layerY > 0 && e.layerY < 50)
            console.log("osakdaf");
    }

    onMouseUp(e){
        isMouseDown = false;
    }
    
    onMouseMove(e){
        if(isMouseDown)
            moverFicha(e.layerX, e.layerY, "red");
    }

}

function moverFicha(x, y, color){
    let canvas =document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    if (y > 0 && y < 70) { 
        limpiarCanvas(canvas, ctx);        
        ctx.beginPath();
        ctx.arc(x,y,22,0,Math.PI*2); 
        ctx.stroke();
        ctx.fillStyle = color;
        ctx.fill();
    }
}

function limpiarCanvas(canvas, ctx){
    ctx.fillStyle = 'RGB(0, 255, 255)';
    ctx.fillRect(0, 0, canvas.width, 100);
}