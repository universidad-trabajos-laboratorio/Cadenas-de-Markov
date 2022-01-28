const dataMatriz ={
    cabecera:["MOVISTAR", "ENTEL", "CLARO"],
    datosEstadoInicial:[[0.4], [0.25], [0.35]],
    datosMatriz:[
        [0.6, 0.2, 0.2],
        [0.3, 0.5, 0.2],
        [0.3, 0.3, 0.4]
    ],
    margen:0.000005
}

let data = dataMatriz;
let cabecera = data.cabecera;
let datosEstadoInicial = data.datosEstadoInicial;
const datosMatriz = data.datosMatriz
let margen = data.margen;


export {datosEstadoInicial,datosMatriz,margen,cabecera};