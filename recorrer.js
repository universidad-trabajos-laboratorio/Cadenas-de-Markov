import { datosEstadoInicial,datosMatriz,margen} from './dataMatriz.js';
import Matriz from './matriz.js';


let matriz = new Matriz(datosMatriz);
let estadoInicial = new Matriz(datosEstadoInicial);

const recorrer = (matriz, estadoInicial) => {
    let arrayResultadoFinal = [];
    let matrizTemporal = estadoInicial;

    let terminar = false;
    while (!terminar) {
        matrizTemporal = matriz.multiplicar(matrizTemporal);

        if (arrayResultadoFinal.length >= 1) {
            let usame = arrayResultadoFinal[arrayResultadoFinal.length - 1];
            usame.filas.forEach((value, index) => {
                let alfo = usame.filas[index][0] - matrizTemporal.filas[index][0];
                if (Math.abs(alfo) <= margen) {
                    terminar = true;
                }
            })
            if (!terminar) {
                arrayResultadoFinal.push(matrizTemporal);
            }


        } else {
            arrayResultadoFinal.push(matrizTemporal);
        }
        console.log("BUCLE");

    }

    return arrayResultadoFinal;
}

export default recorrer;
export {matriz,estadoInicial};






