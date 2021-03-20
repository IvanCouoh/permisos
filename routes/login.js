var conexion = require('../config/conexion');
var express = require('express');
var router = express.Router();


/* GET home page (login.ejs). */
router.get('/', function(req, res, next) {
  res.render('login');
});

/* POST home page (login.ejs). */
router.post('/', function(req, res, next) {
    const { email, password } = req.body;
    const datos = {
        email,
        password
    }
    if (email && password) {
        conexion.query('SELECT * FROM usuarios WHERE email = ? AND pass = ?', [datos.email, datos.password], function(err,resultados){
    
            if(resultados.length > 0){
                 res.redirect('/');

                
            }else{
                res.render('login', {
                        alert: true,
                        alertTitle: "Error",
                        alertMessage: "USUARIO y/o PASSWORD incorrectas",
                        alertIcon:'error',
                        showConfirmButton: true,
                        timer: false,
                        ruta: 'login'    
                    });  
            }
            res.end();   
            console.log(resultados);
        });
        }else{ 
        res.send('Favor de ingresar correo y contraseña');
        res.end();
    }
});

module.exports = router;