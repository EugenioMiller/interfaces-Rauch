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
               canvas.width=600;
               canvas.height=700;
        }
        else if(this.valor==5){
            let fila=7;
            let columna=8;
            let tablero=document.getElementById("tablero");
            tablero.innerHTML=`<canvas id="canvas">
            </canvas>`;
            let canvas = document.getElementById('canvas');
            let ctx =canvas.getContext('2d');
               canvas.width=700;
               canvas.height=800;
        }
        else{
            let fila=8;
            let columna=9;
            let tablero=document.getElementById("tablero");
            tablero.innerHTML=`<canvas id="canvas">
            </canvas>`;
            let canvas = document.getElementById('canvas');
            let ctx =canvas.getContext('2d');
               canvas.width=800;
               canvas.height=900;
        }
       }

    }
//metodos


