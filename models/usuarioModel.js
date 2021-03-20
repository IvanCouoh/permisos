
var bcryptjs = require('bcryptjs');
module.exports = {
    obtener: function (conexion, funcion) {
        conexion.query('select * from usuarios', funcion)
    },
    insertar: async function (conexion, datos, imagen, funcion) {
        let passwordHaash = await bcryptjs.hash(datos.pass, 8)
        conexion.query('insert into usuarios (nombre, email, pass, imagen) values (?,?,?,?)', [datos.nombre, datos.email, passwordHaash, imagen.filename], funcion)
    },
    retornarDatosID: function (conexion, id, funcion) {
        conexion.query('select * from usuarios where id = ?', [id], funcion)
    },
    borrar: function (conexion, id, funcion) {
        conexion.query('delete from usuarios where id = ?', [id], funcion)
    },
    actualizar: async function (conexion, datos, funcion) {
        let passwordHaash = await bcryptjs.hash(datos.pass, 8)
        conexion.query('UPDATE usuarios SET nombre = ?, email = ?, pass=? WHERE id = ?', [datos.nombre, datos.email, passwordHaash, datos.id], funcion)
    },
    actualizarImagen: function (conexion, datos, imagen, funcion) {
        conexion.query('update usuarios set imagen=? where id=?', [imagen.filename, datos.id], funcion)
    },

    
    
}