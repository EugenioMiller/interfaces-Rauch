class Juego{
    constructor(j1, j2){
        this.j1 = j1;
        this.j2 = j2;
        this.tablero=null;
        this.turno=0;
        this.ganador=false;
        this.matriz;
    }
    setTablero(tablero){
        this.tablero=tablero;
    }
    setMatriz(matriz){
        this.matriz = matriz;
    }
    iniciarJuego(){
        let x;
        let contador;
        let y=0;
        let xReal;
        let yMax=0;
       if(this.tablero.valor==4){
            yMax=350;
            contador = 4;
       }
       else if (this.tablero.valor==5){
           yMax=400;
           contador = 5;
       }
       else{
           yMax=450;
           contador = 6;
       }
        while(this.turno < 4) {
            
            if(this.turno%2===0){
                j1.ficha.crearFicha(25,25,j1.ficha.color);
                x=j1.ficha.mover(j1);
                xReal=columna(x);
                y=buscarY(xReal,yMax,this.matriz);
                j1.insertarFicha(xReal,y,j1.ficha.color);
                this.matriz[xReal][y]=1;

                //this.ganador = haGanado(matriz, xReal, y+25, this.j1, contador);
                
                this.turno++;
            }
            else {
                j2.ficha.crearFicha(375,25, j2.ficha.color);
                x=j2.ficha.mover(j2);
                xReal=columna(x);
                y=buscarY(xReal,yMax,this.matriz);
                j2.insertarFicha(xReal,y,j2.ficha.color);
                this.matriz[xReal][y]=2;


                this.turno++;
            }

        }

    }
}
function columna(x){
    if(x>0 && x<=50){
        x=25;
    }
    if(x>50 && x<=100){
        x=75;
    }
    if(x>100 && x<=150){
        x=125;
    }
    if(x>150 && x<=200){
        x=175;
    }
    if(x>200 && x<=250){
        x=225;
    }
    if(x>250 && x<=300){
        x=275;
    }
    if(x>300 && x<=350){
        x=325;
    }
    if(x>350 && x<=400){
        x=375;
    }
    if(x>400 && x<450){
        x=425;
    }
    return x;
}
function buscarY(x,yMax,matriz){
    let y=125;
    while(y<=yMax && matriz[x][y]===0){
        console.log(x);
        console.log(y);
        console.log(matriz[x][y]);
        console.log(matriz[25][375] + " VALOR")
        y+=50;
    }
    return y;
}

function haGanado(matriz, x, y, jugador, c){
    let ganador = false;
    if (horizontal(matriz, x, y, jugador, c) || vertical(matriz, x, y, jugador, c) || diagonal(matriz)){
        ganador = true;
    }
    return ganador;
}

function horizontal(matriz, x, y, jugador, c){
    let xInic = 25;
    let contador = 0;
    let ganador = false;
    while(xInic < x || contador === c){
        if(jugador.nombre === "j1"){
            if(matriz[xInic][y] === 1){
                contador+=1;
                xInic+=50;
            }
            else {
                xInic+=50;
            }
        }
        else if (jugador.nombre === "j2"){
            if(matriz[xInic][y] === 2){
                contador+=1;
                xInic+=50;
            }
            else {
                xInic+=50;
            }
        }
        if(contador === c){
            ganador = true;
        }

    }
    return ganador;
}

function vertical(matriz, x, y, jugador, c){
    let yInic = 0;
    let contador = 0;
    let ganador = false;
    while(yInic < y || contador === c){
        if(jugador.nombre === "j1"){
            if(matriz[x][yInic] === 1){
                contador+=1;
                yInic+=50;
            }
            else {
                yInic+=50;
            }
        }
        else if (jugador.nombre === "j2"){
            if(matriz[x][yInic] === 2){
                contador+=1;
                yInic+=50;
            }
            else {
                yInic+=50;
            }
        }
        if(contador === c){
            ganador = true;
        }

    }
    return ganador;
}