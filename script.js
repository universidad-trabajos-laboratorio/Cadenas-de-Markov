import { cabecera, datosEstadoInicial, datosMatriz, margen } from './dataMatriz.js';
import recorrer from './recorrer.js'
import dibujarTabla, { limpiarTabla } from './matrizDibujoHtml.js';
import Matriz from './matriz.js';


let matriz = new Matriz(datosMatriz);
let estadoInicial = new Matriz(datosEstadoInicial);

const input_margen = document.getElementById('margen');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {

    limpiarTabla();

    let valorParseado = parseFloat(input_margen.value);

    if (!isNaN(valorParseado)) {
        dibujarTabla(recorrer(matriz, estadoInicial, valorParseado), cabecera);
    } else {
        document.getElementById('container').innerHTML = `<h2>Ingrese un numero valido</h2>`;

    }

})


dibujarTabla(recorrer(matriz, estadoInicial, margen), cabecera);



