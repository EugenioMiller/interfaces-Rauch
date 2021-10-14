class Jugador{
    constructor(nombre){
        this.nombre = nombre;
        this.ficha =null;
        this.totalFicha=new Array();
    }
    
    setFicha(color){
        this.ficha = new Ficha(color);
    }
    addFicha(valor){
        for(let x=0; x<valor*6;x++){
            this.totalFicha.push(this.ficha);
        }
    }

    crearFichas(x,y,color){
        let canvas =document.getElementById('canvas');
        let ctx = canvas.getContext('2d');
        let alto=canvas.height;
        
        for(let z=0; z<this.totalFicha.length;z++){
            ctx.beginPath();
            ctx.arc(x,y,this.ficha.radio,0,Math.PI*2); 
            ctx.stroke();
            ctx.fillStyle =color;
            ctx.fill();
            y+=44;
            if(y>alto-25){
                y=25;
                x+=44;
            }
            }
        }
    
}