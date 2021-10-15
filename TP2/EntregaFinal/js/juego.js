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
                this.ganador = haGanado(this.matriz, xReal, yMax, this.j1, contador);
                
                
                this.turno++;
            }
            else {
                j2.crearFichas(700,25, j2.ficha.color);
                x=j2.ficha.mover(j2);
                xReal=columna(x);
                y=buscarY(xReal,yMax,this.matriz);
                //j2.insertarFicha(xReal,y,j2.ficha.color);
                //this.matriz[xReal][y]=2;


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
    if (vertical(matriz, x, y, jugador, c) || horizontal(matriz, x, y, jugador, c)){
        // ||  diagonalIaD(matriz,x,y,jugador,c,yMax)|| diagonalDaI(matriz,x,y,jugador,c,yMax) 
        ganador = true;
    }
    return ganador;
}
function horizontal(matriz, x, y, jugador, c){
    let xInic = 0;
    let xFin = 7;
    let yE= 0;
    let contador = 0;
    let ganador = false;
    while(xInic < xFin && contador != c){

        if(matriz[xInic][yE] === 1){
            contador+=1;
        }
        xInic+=1;
    
    }

    if (contador == c){
        ganador = true;
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
    filaInicial=filaInicial++;
    colInicial=colInicial++;
    if(contador === c){
        ganador = true;
    }
}
return ganador;
}
function  buscarFilaInicio(x, y) {
    let colInicial= x;
    let filaInicial= y;
    while (colInicial>0 && filaInicial>0){
        colInicial=colInicial--;
        filaInicial=filaInicial--;
    }
    return filaInicial;
}
function buscarColInicio( x, y) {
    let colInicial=x;
     let filaInicial= y;
    while (colInicial>0&& filaInicial>0){
        colInicial=colInicial--;
        filaInicial=filaInicial--;
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
        x=x++;
        y=y--;
    }
    return x;
}
function buscarFilaDerecha(x,y,xMax){
    while( x<xMax && y>0){
        x=x++;
        y=y--;
    }
    return y;
}
function recorridoIzq(matriz,colInicial,filaInicial,jugador,c,xMax,yMax){
 let contador =0;
 while( colInicial>0 && filaIncial<yMax && contador<c){
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
    filaInicial=filaInicial++;
    colInicial=colInicial--;
    if(contador === c){
        ganador = true;
    }
    }
  return ganador;
 }

///////Vertical 
function vertical(matriz, x, y, jugador, c){
    let yInic = 0;
    let yMax = 6;
    let contador = 0;
    let ganador = false;
    while(contador != c && yInic < yMax ){
        if(matriz[x][yInic] === 1){
            contador+=1;
        }
        yInic++;


    }

    
    if(contador == c){
        ganador = true;
    }
    return ganador;
}