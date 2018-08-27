 const descripcion = {
     demand: true,
     alias: 'd',
     desc: 'Descripcion de la tarea por hacer'
 };

 const completado = {
     default: true,
     alias: 'c',
     desc: 'Marca como completado o pendiente de la tarea'
 };

 const argv = require('yargs')
     //Command lleva 3 parametros:
     //1. El que lo llama
     //2. La descripcion
     //3. El objeto      
     .command('crear', 'Crear un elemento por hacer', {
         descripcion
     })
     .command('actualizar', 'Actualiza el estado completado de una tarea', {
         descripcion,
         completado
     }).command('borrar', 'Borra una descripcion', {
         descripcion
     })
     .help()
     .argv

 module.exports = {
     argv
 }