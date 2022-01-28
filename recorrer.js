const recorrer = (matriz, estadoInicial,margen) => {
    console.log("margen"+margen);
    let arrayResultadoFinal = [];
    let matrizTemporal = estadoInicial;

    arrayResultadoFinal.push(matrizTemporal);
    console.log(matrizTemporal)

    let terminar = false;
    while (!terminar) {
        matrizTemporal = matriz.multiplicar(matrizTemporal);

        if (arrayResultadoFinal.length >= 1) {
            let usame = arrayResultadoFinal[arrayResultadoFinal.length - 1];
            usame.filas.forEach((value, index) => {
                let valor1 = usame.filas[index][0];
                let valor2 = matrizTemporal.filas[index][0];
                
                let alfo = parseFloat(parseFloat(valor1).toFixed(15)) - parseFloat(parseFloat(valor2).toFixed(15));
                console.log(valor1+ " - "+valor2)
               
                alfo = parseFloat((alfo).toFixed(15))
               margen = parseFloat((margen).toFixed(15))
                console.log("resta="+alfo)
               console.log("MARGEN: "+margen);
                
                if (Math.abs(alfo) <= margen) {                 
                    terminar = true;
                }
            })
        }
            arrayResultadoFinal.push(matrizTemporal);
        
        console.log("BUCLE");

    }

    return arrayResultadoFinal;
}

export default recorrer;






