import {cabecera} from './dataMatriz.js';
import recorrer,{matriz,estadoInicial}from './recorrer.js'
import dibujarTabla from './matrizDibujoHtml.js';

dibujarTabla(recorrer(matriz,estadoInicial),cabecera);



