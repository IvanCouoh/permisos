var express = require("express");
var router = express.Router();
const usuariosController = require("../controllers/usuariosController");
var conexion = require("../config/conexion");

var multer = require("multer");
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

router.get("/login", function (req, res, next) {
  res.render("usuarios/login");
});

router.post("/session", (req, res) => {
  const { email, password } = req.body;
  const datos = { email, password };
  const rol = 0;
  req.session.nombrelog = datos;
 
  if (email && password) {
    conexion.query(
      "SELECT email, pass, privilegio FROM usuarios WHERE email = ? AND pass = ? and privilegio = 'admin'",
      [datos.email, datos.password],
      function (err, resultados) {
        if (resultados.length > 0) {
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
        console.log(resultados);
        
      }
    );
  }
});

router.get("/logueado", function (req, res, next) {
  const loggeo = req.session.nombrelog;
  delete req.session.nombrelog;
  res.render("usuarios/logueado", {
    loggeo,
  });
});

module.exports = router;
