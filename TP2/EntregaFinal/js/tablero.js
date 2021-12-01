class Tablero {
    //Construnctor
    constructor(anchoCanvas, altoCanvas){
        this.anchoCanvas = anchoCanvas;
        this.altoCanvas = altoCanvas;
        this.filas = 6;
        this.columnas = 7; 
        this.cantFichas = 6*7; //Fichas con las que inicia cada jugador
        this.altoFila = ((this.altoCanvas - 200) / this.filas); //Calculo el tamaño de la ficha
        this.anchoCol = this.altoFila + 5;
        this.posTablero = (this.anchoCanvas - this.anchoCol * this.columnas) / 2; //Centra el tablero dent4ro del canvas
        this.matriz = new Array (this.columnas);
        this.crearTablero();
        this.agregarFichas();
        this.dibujarTablero();
        this.fichaJ1;
        this.fichaJ2;
    }

    //Función para crear el tablero
    crearTablero() {
        let valorX = this.posTablero;
        let valorY = 100;
        for (let i = 0; i < this.columnas; i++) {
            this.matriz[i] = new Array();
            for (let j = 0; j < this.filas; j++) {
              let objeto = {
                xv: valorX,
                yv: valorY,
                altoFila: this.altoFila,
                jugador: "none",
              };
              valorY += this.altoFila + 3;
              this.matriz[i].push(objeto);
            }
            valorX += this.altoFila; //Crear una fila nueva
            valorY = 100; //seteo el valor de y para comenzar en la columna inicial
          }
    }

    dibujarTablero(){
        for (let i = 0; i < this.matriz.length; i++) {
            let objeto1 = this.matriz[i];
            for (let j = 0; j < this.filas; j++) {
                let objeto2 = objeto1[j];
                switch (objeto2.jugador) {
                case "none":
                    dibujarFichas(objeto2.xv, objeto2.yv, objeto2.altoFila, objeto2.jugador); 
                    break;
                case "j1":
                    dibujarFichas(objeto2.xv, objeto2.yv, objeto2.altoFila, objeto2.jugador);
                    break;
                case "j2":
                    dibujarFichas(objeto2.xv, objeto2.yv, objeto2.altoFila, objeto2.jugador);
                    break;
                }
            }
            }
            dibujarFichas(
            this.fichaJ1.xv,
            this.fichaJ1.yv,
            this.fichaJ1.altoFila,
            this.fichaJ1.jugador
            );
            dibujarFichas(
            this.fichaJ2.xv,
            this.fichaJ2.yv,
            this.fichaJ2.altoFila,
            this.fichaJ2.jugador
            );
    }

    //funcion limpiar canvas
    limpiar() {
        limpiarCanvas();
        seleccionTurno();
        this.dibujarTablero(); 
    }

    //Agrega fichas para cada jugador
    agregarFichas() {
        let posJ1 = this.posTablero / 2 - this.altoFila / 2;
        this.fichaJ1 = {
            xv: posJ1,
            yv: this.altoFila * 2,
            altoFila: this.altoFila,
            jugador: "j1"
        }; 
        

        let posJ2 = this.anchoCanvas - this.posTablero / 2 - this.altoFila / 2;
        this.fichaJ2 = {
            xv: posJ2,
            yv: this.altoFila * 2,
            altoFila: this.altoFila,
            jugador: "j2"
        };
        
    }

    //funcion para insertar la ficha en tablero
    insertarFicha(columna, jugador) {
        let i = 0; 
        let col = this.matriz[columna]; //guardo la posición de x
        if (col[0].jugador === "none") {
            while (i < col.length && col[i].jugador === "none") {
                //recorro la columna hasta encontrar o no una ficha
                i++;
            }
            //agrego ficha
            col[i - 1].jugador = jugador;

            //actualizo el tablero 
            this.refresh();
            return i - 1;
        } 
        else {
            return -1;
        }
    }

    //Verifica si hay un ganador
    verificarGanador(columna, fila) {
        let jugador = this.matriz[columna][fila].jugador,
      iterator = col;
        let contador = 1;
        //verifico mi derecha
        contador += this.verificar(columna, fila, 1, 0, jugador);
        if (contador < 4) {
            contador += this.verificar(columna, fila, -1, 0, jugador);
        }
    
        //verifico de forma vertical
        if (contador < 4) {
            contador = 1;
            contador += this.verificar(columna, fila, 0, 1, jugador);
            if (contador < 4) {
                contador += this.verificar(columna, fila, 0, -1, jugador);
            }
        }
        //Verifico en diagonal hacia abajo
        if (contador < 4) {
            contador = 1;
            contador += this.verificar(columna, fila, -1, -1, jugador);
            if (contador < 4) {
                contador += this.verificar(columna, fila, 1, 1, jugador);
            }
        }
        //Verifico en diagonal hacia arriba
        if (contador < 4) {
            contador = 1;
            contador += this.verificar(columna, fila, -1, 1, jugador);
            if (contador < this.tipeGame) {
                contador += this.verificar(columna, fila, 1, -1, jugador);
            }
        }

        if(contador>=4){
            return true;
        }
        else{
            return false
        }
    }

    //Funcion que verifica si hay 4 fichas iguales
    verificar(columna, fila, direccionCol, direccionFila, jugador) {
        let contador = 0;
        let i = columna + direccionCol;
        let j = fila + direccionFila;

        while (j < this.filas && j >= 0 && i < this.columnas && i >= 0 && this.matriz[i][j].jugador == jugador) {
            contador++;
            i += direccionCol;
            j += direccionFila;
        }
        
        return contador;
    }

}