var express = require("express");
var router = express.Router();
var conexion = require("../config/conexion");
var seccioneController = require('../controllers/seccionesController');

router.get('/inicio', function (req, res) {
    const loggeo = req.session.nombrelog;

    if (loggeo) {
     conexion.query("select * from usuarios where email = ? and pass",[loggeo.email,loggeo.password],
     function(err, result, fields){
        // console.log(loggeo.email);
        // console.log(loggeo.password);

        var inicioPermiso = result[0].inicio
         if (inicioPermiso == 'inicio') {
             inicioPermiso = 1
            console.log(inicioPermiso)
        }

            else{
             inicioPermiso = 0
              console.log(inicioPermiso)
            }
         



         
        
         
        

      
      
      
  



        res.render("secciones/inicio", { title: "Inicio", loggeo });





     }
     
     
     )



     // res.render("secciones/inicio", { title: "Inicio", loggeo });
    } else {
      res.redirect("/login");
    }
  })

router.get('/fotos', seccioneController.fotos);
router.get('/ilustraciones', seccioneController.ilustraciones);
router.get('/juegosdemesa', seccioneController.juegosdemesa);
router.get('/videojuegos', seccioneController.videojuegos);














module.exports = router;

