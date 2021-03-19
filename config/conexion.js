var mysql = require('mysql');
var conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'permisosUsuarios'
})

conexion.connect(
    (error) => {
        if (!error) {
            console.log("Se conecto la bd");
        } else {
            console.log("Error de conexion");
        }
    }
)

module.exports = conexion;