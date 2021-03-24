module.exports = {
    obtener: function (conexion, funcion) {
        conexion.query('select * from usuarios', funcion)
    },
    insertar: function (conexion, datos, imagen, funcion) {
        conexion.query('insert into usuarios (nombre, email, pass, imagen, inicio, fotos, ilustraciones, juegosdemesa, videojuegos) values (?,?,?,?,?,?,?,?,?)', [datos.nombre, datos.email, datos.pass, imagen.filename, datos.inicio, datos.fotos, datos.ilustraciones, datos.juegosdemesa, datos.videojuegos], funcion)
    },
    retornarDatosID: function (conexion, id, funcion) {
        conexion.query('select * from usuarios where id = ?', [id], funcion)
    },
    borrar: function (conexion, id, funcion) {
        conexion.query('delete from usuarios where id = ?', [id], funcion)
    },
    actualizar: function (conexion, datos, funcion) {
        conexion.query('UPDATE usuarios SET nombre = ?, email = ?, pass=? WHERE id = ?', [datos.nombre, datos.email, datos.pass, datos.id], funcion)
    },
    actualizarImagen: function (conexion, datos, imagen, funcion) {
        conexion.query('update usuarios set imagen=? where id=?', [imagen.filename, datos.id], funcion)
    },
    obtenerSecciones: function (conexion, funcion) {
        conexion.query('select inicio, fotos from usuarios', funcion)
    },
}

//insertar datos encriptados
//   insertar: async function (conexion, datos, imagen, funcion) {
//     let passwordHaash = await bcryptjs.hash(datos.pass, 8)
//     conexion.query('insert into usuarios (nombre, email, pass, imagen) values (?,?,?,?)', [datos.nombre, datos.email, passwordHaash, imagen.filename], funcion)
// },