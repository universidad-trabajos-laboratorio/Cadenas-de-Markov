
const crearFIlaCabecera = (cabecera) => {
let columnas = '<div class="columna posicion"></div>';
    cabecera.forEach(value=>{
        let columna = `<div class="columna">${value}</div>`;
        columnas+=columna;
    })
const template = ` <div class="fila cabecera">${columnas}</div>`
    return template;
}
const crearFila = (columnas) => {
    const template = ` <div class="fila">${columnas}</div>`
    return template;
}
const crearColumna = (columna) => {
    const template = `<div class="columna">${columna}</div>`;
    return template;
}

const crearColumnas = (datos,pos='') => {
    let columnas = `<div class="columna posicion">${pos!==''?"pos ("+pos+")":''}</div>`;
    for (let columna of datos) {
        columnas += crearColumna(parseFloat(columna).toFixed(6));
    }
    return columnas;
}

const container = document.getElementById('container');

const dibujarTabla = (arrayResultadoFinal,cabecera)=>{
    const cabeceraHTML = crearFIlaCabecera(cabecera)
    let filas = '';
    arrayResultadoFinal.forEach((columna,index)=>{
        let aux = [].concat(...columna.filas);
        let fila = crearFila(crearColumnas(aux,index))
        filas+=fila;
    })
    container.insertAdjacentHTML('afterbegin',cabeceraHTML);
   container.insertAdjacentHTML('beforeend',filas);
}
const limpiarTabla = ()=>{
    container.innerHTML = '';
}

export default dibujarTabla;
export {limpiarTabla};