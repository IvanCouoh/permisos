var mysql = require('mysql');
var conexion = mysql.createConnection({
    // host: 'localhost',
    // user: 'root',
    // database: 'permisosusuarios',
    // password: '',
    host: 'baipwdhtqzx69zff70yv-mysql.services.clever-cloud.com',
    user: 'u5ptc9toou9gill2',
    database: 'baipwdhtqzx69zff70yv',
    password: 'BQNnLRdHLaaJ2InPyjtN',
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