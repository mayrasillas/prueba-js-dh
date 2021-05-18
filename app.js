/*
    FORMATO DE CADA TAREA
        - titulo: string
        - status: string (
           * terminada
           * pendiente
         )
*/
const fs = require('fs')

exports.leerTareas = function () {
    const lea = fs.readFileSync('tareas.json', 'utf-8')
    return JSON.parse(lea)
}

exports.agregarTarea = function (tarea) {
    fs.writeFileSync('../prueba-js-dh/tareas.json', JSON.stringify(tarea));
}

exports.filtrarTareasPorEstado = function (estado) {
    /*
        En esta función debes de leer las tareas y retornar las que tengan el estado que se
        manda en el parametro.
    */
        const filtro = fs.readFileSync('tareas.json', 'utf-8')
        if(filtro.status == estado){
            return JSON.parse(filtro)
        }
}
