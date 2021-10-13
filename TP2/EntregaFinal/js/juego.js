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
            xMax=350;
            yMax=400;
            contador = 4;
       }
       else if (this.tablero.valor==5){
           xMax=400;
           yMax=450;
           contador = 5;
       }
       else{
           xMax=450;
           yMax=500;
           contador = 6;
       }
        while(this.turno < 4) {
            
            if(this.turno%2===0){
                j1.ficha.crearFicha(25,25,j1.ficha.color);
                x=j1.ficha.mover(j1);
                xReal=columna(x);
                y=buscarY(xReal,yMax,this.matriz);
                console.log(y + " En IF")
                j1.insertarFicha(xReal,y-50,j1.ficha.color);
                this.matriz[xReal][y-50]=1;

                //this.ganador = haGanado(matriz, xReal, y+25, this.j1, contador);
                
                this.turno++;
            }
            else {
                j2.ficha.crearFicha(375,25, j2.ficha.color);
                x=j2.ficha.mover(j2);
                xReal=columna(x);
                y=buscarY(xReal,yMax,this.matriz);
                console.log(y + " en el Else")
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