const fs = require('fs');

let listadoPorHacer = []; //Se crea un vector vacio

const guardarJSON = () => {

    let data = JSON.stringify(listadoPorHacer); //Se transforma el objeto en JSON
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se puede grabar', err);
    });
}

const cargarBD = () => {

    try {
        listadoPorHacer = require('../db/data.json');
        console.log(listadoPorHacer);
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {

    cargarBD();

    let porHacer = { //Se crea el objeto
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);

    guardarJSON();
    //cargarBD();
    return porHacer;
}

const getListado = () => {
    cargarBD();
    return listadoPorHacer;

}

const actualizar = (descripcion, completado = true) => {
    cargarBD();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    //si index es -1 indica que no lo encontro y si es 0 o mayor que si lo encontro
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarJSON();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarBD();
    /*let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
        });*/
    //La funcion de arriba es igual a la de aqui abajo
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarJSON();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}