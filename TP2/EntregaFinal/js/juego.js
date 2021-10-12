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
        
        while(this.turno < 3) {
            if(this.turno%2==0){
                j1.ficha.crearFicha(25,25,j1.ficha.color);
                j1.ficha.mover(j1);
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