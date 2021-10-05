class Tablero{
    constructor (valor){
        this.valor=valor;
    }

    crearTablero(){
        if(this.valor==4){
            let fila=6;
            let columna=7;
            let tablero=document.getElementById("tablero");
            tablero.innerHTML=`<canvas id="canvas">
            </canvas>`;
            let canvas = document.getElementById('canvas');
            let ctx =canvas.getContext('2d');
            canvas.width=350;
            canvas.height=300;
            let matriz = new Array();
            dibujaEscenario(matriz, ctx, canvas.width, canvas.height);
            
        }
        else if(this.valor==5){
            let fila=7;
            let columna=8;
            let tablero=document.getElementById("tablero");
            tablero.innerHTML=`<canvas id="canvas">
            </canvas>`;
            let canvas = document.getElementById('canvas');
            let ctx =canvas.getContext('2d');
               canvas.width=400;
               canvas.height=350;
               let matriz = new Array();
            dibujaEscenario(matriz, ctx, canvas.width, canvas.height);
        }
        else if(this.valor==6){
            let fila=8;
            let columna=9;
            let tablero=document.getElementById("tablero");
            tablero.innerHTML=`<canvas id="canvas">
            </canvas>`;
            let canvas = document.getElementById('canvas');
            let ctx =canvas.getContext('2d');
               canvas.width=450;
               canvas.height=400;
               let matriz = new Array();
               dibujaEscenario(matriz, ctx, canvas.width, canvas.height);
            }
       }

}

function dibujaEscenario(matriz, ctx, f, c){
    for (let x = 25; x < f; x=x+50){
        matriz[x] = new Array();
        for (let y = 25; y < c; y=y+50){
            ctx.beginPath();
            matriz [x][y] =ctx.arc(x, y, 22, 0, 2 * Math.PI); ;
            ctx.stroke();
        }
    }
  
}