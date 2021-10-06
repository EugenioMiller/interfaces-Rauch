let matriz = new Array();


class Tablero{
    constructor (valor){
        this.valor=valor;
    }

    crearTablero(){
        if(this.valor==4){
            let tablero=document.getElementById("tablero");
            tablero.innerHTML=`<canvas id="canvas">
            </canvas>`;
            let canvas = document.getElementById('canvas');
            let ctx =canvas.getContext('2d');
            canvas.width=350;
            canvas.height=300;
            matriz = dibujaEscenario(matriz, ctx, canvas.width, canvas.height);
            
        }
        else if(this.valor==5){
            let tablero=document.getElementById("tablero");
            tablero.innerHTML=`<canvas id="canvas">
            </canvas>`;
            let canvas = document.getElementById('canvas');
            let ctx =canvas.getContext('2d');
            canvas.width=400;
            canvas.height=350;
            matriz = dibujaEscenario(matriz, ctx, canvas.width, canvas.height);
        }
        else if(this.valor==6){
            let tablero=document.getElementById("tablero");
            tablero.innerHTML=`<canvas id="canvas">
            </canvas>`;
            let canvas = document.getElementById('canvas');
            let ctx =canvas.getContext('2d');
            canvas.width=450;
            canvas.height=400;
            matriz = dibujaEscenario(matriz, ctx, canvas.width, canvas.height);
        }
    }

    pintarCirculo(x, y, ficha){
        let canvas = document.getElementById('canvas');
        let ctx =canvas.getContext('2d');
        if( matriz[x][y] === 0)
            matriz[x][y] = ficha;
    }

}

function dibujaEscenario(matriz, ctx, f, c){
    for (let x = 25; x < f; x+=50){
        matriz[x] = new Array();
        for (let y = 25; y < c; y+=50){
            ctx.beginPath();
            matriz [x][y] =ctx.arc(x, y, 22, 0, 2 * Math.PI); 
            matriz[x][y]= 0;
            ctx.stroke();
        }
    }
    return matriz;
}

