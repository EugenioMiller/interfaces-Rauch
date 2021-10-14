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
        let xMax=0;
        let yMax=0;
       if(this.tablero.valor==4){
            xMax=7;
            yMax=6;
            contador = 4;
       }
       else if (this.tablero.valor==5){
           xMax=8;
           yMax=7;
           contador = 5;
       }
       else{
           xMax=9;
           yMax=8;
           contador = 6;
       }
        while(this.turno < 1) {
            
            if(this.turno%2===0){
                j1.crearFichas(25,25,j1.ficha.color);
                x=j1.ficha.mover(j1);
                xReal=columna(x);
                y=buscarY(xReal,yMax,this.matriz);
                j1.insertarFicha(xReal,y,j1.ficha.color);
                console.log(xReal);
                console.log(y);
                this.matriz[xReal][y]=1;
                console.log(this.matriz);
                //this.ganador = haGanado(matriz, xReal, y+25, this.j1, contador);
                
                this.turno++;
            }
            else {
                j2.crearFichas(700,25, j2.ficha.color);
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
        x=0;
    }
    if(x>50 && x<=100){
        x=1;
    }
    if(x>100 && x<=150){
        x=2;
    }
    if(x>150 && x<=200){
        x=3;
    }
    if(x>200 && x<=250){
        x=4;
    }
    if(x>250 && x<=300){
        x=5;
    }
    if(x>300 && x<=350){
        x=6;
    }
    if(x>350 && x<=400){
        x=7;
    }
    if(x>400 && x<450){
        x=8;
    }
    return x;
}
function buscarY(x,yMax,matriz){
    let y=0;
    while(y<=yMax && matriz[x][y]==0){
        y++;
    }
    return y-1;
}

function haGanado(matriz, x, y, jugador, c){
    let ganador = false;
    if (horizontal(matriz, x, y, jugador, c) || vertical(matriz, x, y, jugador, c) 
    || diagonalIaD(matriz,x,y,jugador,c,yMax)|| diagonalDaI(matriz,x,y,jugador,c,yMax) ){
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
//las x son las comlumnas e y las filas.Buscamos de forma diagonal de dos formas(de izquierda a der 
// && de derecha a izq)
function diagonalIaD(matriz, x, y, jugador, c,yMax){
 let filaIncial=buscarFilaInicio(x,y);
 let colIncial=buscarColInicio(x,y);
  return recorridoADer(matriz,colIncial,filaIncial,jugador,c,yMax);

}
function recorridoADer( matriz,  colInicial,  filaInicial,jugador ,c,xMax,yMax) {
let contador=0;
let ganador = false;
//fila
while (colInicial>xMax && filaInicial<yMax && contador<c){
    if(jugador.nombre === "j1"){
        if (matriz[colInicial][filaInicial]==1){
            contador++;
        }
        else {
            contador=0;
        }
    }
    else if (jugador.nombre === "j2"){
        if(matriz[colInicial][filaInicial] === 2){
            contador++;
            
        }
        else {
           contador=0;
        }
    }
    filaInicial=filaInicial+50;
    colInicial=colInicial+50;
    if(contador === c){
        ganador = true;
    }
}
return ganador;
}
function  buscarFilaInicio(x, y) {
    let colInicial= x;
    let filaInicial= y;
    while (colInicial>25 && filaInicial>125){
        colInicial=colInicial-50;
        filaInicial=filaInicial-50;
    }
    return filaInicial;
}
function buscarColInicio( x, y) {
    let colInicial=x;
     let filaInicial= y;
    while (colInicial>25&& filaInicial>125){
        colInicial=colInicial-50;
        filaInicial=filaInicial-50;
    }
    return colInicial;
}
//creo la funcion para recorrer la diagonal de Derecha a Izq
function diagonalDaI(matriz,x,y,jugador,c,xMax,yMax){
    let colInicial=buscarColDerercha(x,y,xMax);
    let filaIncial=buscarFilaDerecha(x,y,xMax);
    return recorridoIzq(matriz,colInicial,filaIncial,jugador,c,xMax,yMax);
 
}
function buscarColDerercha(x,y,xMax){
    while( x<xMax && y>0){
        x=x+50;
        y=y-50;
    }
    return x;
}
function buscarFilaDerecha(x,y,xMax){
    while( x<xMax && y>0){
        x=x+50;
        y=y-50;
    }
    return y;
}
function recorridoIzq(matriz,colInicial,filaInicial,jugador,c,xMax,yMax){
 let contador =0;
 while( colInicial>25 && filaIncial<yMax && contador<c){
    if(jugador.nombre === "j1"){
        if (matriz[colInicial][filaInicial]==1){
            contador++;
        }
        else {
            contador=0;
        }
    }
    else if (jugador.nombre === "j2"){
        if(matriz[colInicial][filaInicial] === 2){
            contador++;
            
        }
        else {
           contador=0;
        }
    }
    filaInicial=filaInicial+50;
    colInicial=colInicial-50;
    if(contador === c){
        ganador = true;
    }
    }
  return ganador;
 }

///////Vertical
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