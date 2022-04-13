var mysql = require('mysql');
var conexion = mysql.createConnection({
    host: 'big3ixxmfwqqih1vo6aq-mysql.services.clever-cloud.com',
    user: 'uju91x0pcybqvsue',
    database: 'big3ixxmfwqqih1vo6aq',
    password: '7tUiGvAb5UxpSQrNKQIT',
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