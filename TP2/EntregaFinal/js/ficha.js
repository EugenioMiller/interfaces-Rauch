let lastClickedFigure = null;
let isMouseDown ;

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

    mover(jugador){
        let x;
        let canvas =document.getElementById('canvas');
        let ctx = canvas.getContext('2d');
        canvas.addEventListener('mousedown', this.onMouseDown, false);
        canvas.addEventListener('mouseup',() =>
         this.onMouseUp(event),
          false);
        canvas.addEventListener('mousemove', () =>
           this.onMouseMove(event, jugador)
         , false);
         return this.onMouseUp(event);
    }

    onMouseDown(e){
        isMouseDown = true;
        
    }

    onMouseUp(e){
        isMouseDown = false;
        return e.layerX;
       
    }
    
    onMouseMove(e, jugador){
        if(isMouseDown)
            moverFicha(e.layerX, e.layerY, jugador.ficha.color);
    }

}

function moverFicha(x, y, color){
    let canvas =document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    if (y > 0 && y < 75) {
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