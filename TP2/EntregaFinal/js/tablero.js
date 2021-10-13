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
            canvas.width=850;
            canvas.height=600;
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
            matriz[x][y]= 0;
        }
    }

    for(let ancho = 275; ancho < 50*c+275; ancho+=50){
        for(let alto = 125; alto < 50*(f+2); alto+=50){
            ctx.beginPath();
            ctx.arc(ancho, alto, 22, 0, 2 * Math.PI); 
            ctx.stroke();
        }
    }
    return matriz;
}

