class Juego{
    constructor(j1, j2){
        this.j1 = j1;
        this.j2 = j2;
        this.turno=2;
        this.ganador=false;
    }

    iniciarJuego(){
 
        if(this.turno%2==0){
            j1.ficha.crearFicha(25,25,j1.ficha.color);
            j1.ficha.mover();
            this.turno++;
        }
        else{
            j2.crearFicha(375,25);
            this.turno++;
        }

    }
}