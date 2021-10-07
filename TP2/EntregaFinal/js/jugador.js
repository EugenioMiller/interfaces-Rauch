class Jugador{
    constructor(nombre){
        this.nombre = nombre;
        this.ficha = null;
    }
    
    setFicha(color){
        this.ficha = new Ficha(color);
    }
}
