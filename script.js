import {cabecera,datosEstadoInicial,datosMatriz,margen} from './dataMatriz.js';
import recorrer from './recorrer.js'
import dibujarTabla,{limpiarTabla} from './matrizDibujoHtml.js';
import Matriz from './matriz.js';


let matriz = new Matriz(datosMatriz);
let estadoInicial = new Matriz(datosEstadoInicial);

const input_margen = document.getElementById('margen');
const btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    limpiarTabla();
    let valor =  input_margen.value;
    console.log(valor);
    let valorParseado =parseFloat(valor); 
    console.log(valorParseado);
    dibujarTabla(recorrer(matriz,estadoInicial,valorParseado),cabecera);
})


dibujarTabla(recorrer(matriz,estadoInicial,margen),cabecera);



