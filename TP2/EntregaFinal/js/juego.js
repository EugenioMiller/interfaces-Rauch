class Juego{
    constructor(j1, j2){
        this.j1 = j1;
        this.j2 = j2;
        this.tablero=null;
        this.turno=1;
        this.ganador=false;
    }
    setTablero(tablero){
        this.tablero=tablero;
    }
    iniciarJuego(){
        let matriz=this.tablero.matriz;
        let x;
        let y=0;
        let xReal;
        let yMax=0;
       if(this.tablero.valor==4){
        yMax=350;
       }
       else if (this.tablero.valor==5){
           yMax=400;
       }
       else{
           yMax=450;
       }
        while(this.turno < 3) {
  
            if(this.turno%2==0){
                j1.ficha.crearFicha(25,25,j1.ficha.color);
                x=j1.ficha.mover(j1);
                console.log(x);
                xReal=columna(x);
                console.log(xReal+"x real");
                y=buscarY(xReal,yMax,matriz);
                console.log(y+"la yyyy");
                j1.insertarFicha(xReal,y+25,j1.ficha.color);
                matriz[xReal][y+25]=1;
                console.log(matriz);
                
                this.turno+=1;
            }
            else{
                j2.ficha.crearFicha(375,25, j2.ficha.color);
                j2.ficha.mover(j2);
                this.turno+=1;
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
    let y=0;
    while(y<yMax  || matriz[x][y]==0){
        y+=50;
    }
    return y;
}