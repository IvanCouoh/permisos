var express = require("express");
var router = express.Router();
const usuariosController = require("../controllers/usuariosController");
var conexion = require("../config/conexion");

var multer = require("multer");
const { query } = require("../config/conexion");
var fecha = Date.now();
var rutaAlmacen = multer.diskStorage({
  destination: function (request, file, callback) {
    callback(null, "public/images");
  },
  filename: function (request, file, callback) {
    callback(null, fecha + "_" + file.originalname);
  },
});
var cargar = multer({
  storage: rutaAlmacen,
});

/* GET home page. */

router.get("/", usuariosController.index);
router.get("/crear", usuariosController.crear);
router.post("/", cargar.single("imagen"), usuariosController.guardar);
router.post("/eliminar/:id", usuariosController.eliminar);
router.get("/editar/:id", usuariosController.editar);
router.post(
  "/actualizar",
  cargar.single("imagen"),
  usuariosController.actualizar
);

router.get("/logoutadmin", function (req, res) {
  req.session.destroy(() => {
    res.redirect("/login"); // siempre se ejecutará después de que se destruya la sesión
  });
});

router.get("/login", function (req, res, next) {
  const loggeo = req.session.nombrelog;
  const loggeoadm = req.session.nombrelogadm;

  if (loggeo) {
    res.redirect("/secciones/inicio");
  }

  if (loggeoadm) {
    res.redirect("/usuarios");
  } else {
    res.render("usuarios/login");
  }
});

router.post("/session", (req, res) => {
  const { email, password } = req.body;
  const datos = { email, password };
  if (email && password) {
    conexion.query(
      "SELECT email, pass, privilegio FROM usuarios WHERE email = ? AND pass = ? and privilegio = 'admin'",
      [datos.email, datos.password],
      function (err, resultados, fields) {
        console.log(resultados);
        
        if (resultados.length > 0) {
          req.session.nombrelogadm = datos;
          res.redirect("/usuarios");
        }
      }
    );
  }

  if (email && password) {
    conexion.query(
      "SELECT email, pass, privilegio FROM usuarios WHERE email = ? AND pass = ? and privilegio = 'usuario'",
      [datos.email, datos.password],
      function (err, resultados) {
        if (resultados.length > 0) {
          req.session.nombrelog = datos;
          res.redirect("/secciones/inicio");
        } else {
          res.render("usuarios/login", {
            alert: true,
            alertTitle: "Error",
            alertMessage: "USUARIO y/o PASSWORD incorrectas",
            alertIcon: "error",
            showConfirmButton: true,
            timer: false,
            ruta: "login",
          });
        }
       
     
        
      }
    );
  }
});

module.exports = router;
