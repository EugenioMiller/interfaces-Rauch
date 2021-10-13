//let matriz = new Array();


class Tablero{
    constructor (valor){
        this.valor=valor;
        this.matriz=new Array();
    }

    crearTablero(){
        if(this.valor==4){
            let tablero=document.getElementById("tablero");
            tablero.innerHTML=`<canvas id="canvas">
            </canvas>`;
            let canvas = document.getElementById('canvas');
            let ctx =canvas.getContext('2d');
            canvas.width=350;
            canvas.height=400;
            this.matriz = dibujaEscenario(this.matriz, ctx, this.valor);
        }
        else if(this.valor==5){
            let tablero=document.getElementById("tablero");
            tablero.innerHTML=`<canvas id="canvas">
            </canvas>`;
            let canvas = document.getElementById('canvas');
            let ctx =canvas.getContext('2d');
            canvas.width=400;
            canvas.height=450;
            this.matriz = dibujaEscenario(this.matriz, ctx, this.valor);
        }
        else if(this.valor==6){
            let tablero=document.getElementById("tablero");
            tablero.innerHTML=`<canvas id="canvas">
            </canvas>`;
            let canvas = document.getElementById('canvas');
            let ctx =canvas.getContext('2d');
            canvas.width=450;
            canvas.height=500;
            this.matriz = dibujaEscenario(this.matriz, ctx, this.valor);
        }
    }

    pintarCirculo(x, y, ficha){
        let canvas = document.getElementById('canvas');
        let ctx =canvas.getContext('2d');
        if( matriz[x][y] === 0)
            matriz[x][y] = ficha;
    }
}

function dibujaEscenario(matriz, ctx, valor){
    let c, f;
    if(valor == 4){
        c = 7;
        f = 6;
    }
    if(valor == 5){
        c = 8;
        f = 7;
    }
    if(valor == 6){
        c = 9;
        f = 8;
    }
    
    for (let x = 0; x < c; x++){
        matriz[x] = new Array();
        for (let y = 0; y < f; y++){
            ctx.beginPath();
            matriz [x][y] =ctx.arc(x, y, 22, 0, 2 * Math.PI); 
            matriz[x][y]= 0;
            ctx.stroke();
        }
    }
    return matriz;
}

