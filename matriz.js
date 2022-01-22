class Matriz {
    numColumnas = 0;
    numFilas = 0;
    filas = [];
    constructor(filas) {
        this.filas = filas;
        this.numColumnas = filas[0].length;
        this.numFilas = filas.length;
    }
    multiplicar(matriz = new matriz([[0, 2, 3]])) {
        let resultado = [];
        if (this.numColumnas == matriz.numFilas) {
            this.filas.forEach((fila, pos) => {
                matriz.filas.forEach((value, index) => {
                    resultado[index] = (resultado[index] || 0) + fila[index] * matriz.filas[pos][0];
                });
            })
        } else {
            throw new Error("El numero de culmnas no corresponde al numero de filas");
        }
        resultado = resultado.map(value => [value.toFixed(6)]);
        return new Matriz(resultado);
    }
}
export default Matriz;