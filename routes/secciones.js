var express = require("express");
var router = express.Router();
var conexion = require("../config/conexion");
var seccioneController = require("../controllers/seccionesController");

router.get("/inicio", function (req, res) {
  const loggeo = req.session.nombrelog;
  if (loggeo) {
    conexion.query(
      "select * from usuarios where email = ? and pass",
      [loggeo.email, loggeo.password],
      function (err, result, fields) {
       var  inicioPermiso = result[0].inicio;
        var fotosPermiso = result[0].fotos;
        var ilustracionesPermiso = result[0].ilustraciones;
        var juegosdemesaPermiso = result[0].juegosdemesa;
        var videojuegosPermiso = result[0].videojuegos;

        if (inicioPermiso == "inicio") {
          inicioPermiso = 1;
        } else {
          inicioPermiso = 0;
        }
        if (fotosPermiso == "fotos") {
          fotosPermiso = 1;
        } else {
          fotosPermiso = 0;
        }
        if (ilustracionesPermiso == "ilustraciones") {
          ilustracionesPermiso = 1;
        } else {
          ilustracionesPermiso = 0;
        }
        if (juegosdemesaPermiso == "juegosdemesa") {
          juegosdemesaPermiso = 1;
        } else {
          juegosdemesaPermiso = 0;
        }

        if (videojuegosPermiso == "videojuegos") {
          videojuegosPermiso = 1;
        } else {
          videojuegosPermiso = 0;
        }

        res.render("secciones/inicio", {
          title: "Inicio",
          loggeo,
          inicioPermiso,
          fotosPermiso,
          ilustracionesPermiso,
          juegosdemesaPermiso,
          videojuegosPermiso,
        });
      }
    );
  } else {
    res.redirect("/login");
  }
});

router.get("/fotos", function (req, res) {
  const loggeo = req.session.nombrelog;
  if (loggeo) {
    conexion.query(
      "select * from usuarios where email = ? and pass",
      [loggeo.email, loggeo.password],
      function (err, result, fields) {
        var inicioPermiso = result[0].inicio;
        var fotosPermiso = result[0].fotos;
        var ilustracionesPermiso = result[0].ilustraciones;
        var juegosdemesaPermiso = result[0].juegosdemesa;
        var videojuegosPermiso = result[0].videojuegos;

        if (inicioPermiso == "inicio") {
          inicioPermiso = 1;
        } else {
          inicioPermiso = 0;
        }
        if (fotosPermiso == "fotos") {
          fotosPermiso = 1;
        } else {
          fotosPermiso = 0;
        }
        if (ilustracionesPermiso == "ilustraciones") {
          ilustracionesPermiso = 1;
        } else {
          ilustracionesPermiso = 0;
        }
        if (juegosdemesaPermiso == "juegosdemesa") {
          juegosdemesaPermiso = 1;
        } else {
          juegosdemesaPermiso = 0;
        }

        if (videojuegosPermiso == "videojuegos") {
          videojuegosPermiso = 1;
        } else {
          videojuegosPermiso = 0;
        }

        res.render("secciones/fotos", {
          title: "fotos",
          loggeo,
          inicioPermiso,
          fotosPermiso,
          ilustracionesPermiso,
          juegosdemesaPermiso,
          videojuegosPermiso,
        });
      }
    );
  } else {
    res.redirect("/login");
  }
});

router.get("/ilustraciones", function (req, res) {
  const loggeo = req.session.nombrelog;
  if (loggeo) {
    conexion.query(
      "select * from usuarios where email = ? and pass",
      [loggeo.email, loggeo.password],
      function (err, result, fields) {
        var inicioPermiso = result[0].inicio;
        var fotosPermiso = result[0].fotos;
        var ilustracionesPermiso = result[0].ilustraciones;
        var juegosdemesaPermiso = result[0].juegosdemesa;
        var videojuegosPermiso = result[0].videojuegos;

        if (inicioPermiso == "inicio") {
          inicioPermiso = 1;
        } else {
          inicioPermiso = 0;
        }
        if (fotosPermiso == "fotos") {
          fotosPermiso = 1;
        } else {
          fotosPermiso = 0;
        }
        if (ilustracionesPermiso == "ilustraciones") {
          ilustracionesPermiso = 1;
        } else {
          ilustracionesPermiso = 0;
        }
        if (juegosdemesaPermiso == "juegosdemesa") {
          juegosdemesaPermiso = 1;
        } else {
          juegosdemesaPermiso = 0;
        }

        if (videojuegosPermiso == "videojuegos") {
          videojuegosPermiso = 1;
        } else {
          videojuegosPermiso = 0;
        }

        res.render("secciones/ilustraciones", {
          title: "ilustraciones",
          loggeo,
          inicioPermiso,
          fotosPermiso,
          ilustracionesPermiso,
          juegosdemesaPermiso,
          videojuegosPermiso,
        });
      }
    );
  } else {
    res.redirect("/login");
  }
});
router.get("/juegosdemesa", function (req, res) {
  const loggeo = req.session.nombrelog;
  if (loggeo) {
    conexion.query(
      "select * from usuarios where email = ? and pass",
      [loggeo.email, loggeo.password],
      function (err, result, fields) {
        var inicioPermiso = result[0].inicio;
        var fotosPermiso = result[0].fotos;
        var ilustracionesPermiso = result[0].ilustraciones;
        var juegosdemesaPermiso = result[0].juegosdemesa;
        var videojuegosPermiso = result[0].videojuegos;

        if (inicioPermiso == "inicio") {
          inicioPermiso = 1;
        } else {
          inicioPermiso = 0;
        }
        if (fotosPermiso == "fotos") {
          fotosPermiso = 1;
        } else {
          fotosPermiso = 0;
        }
        if (ilustracionesPermiso == "ilustraciones") {
          ilustracionesPermiso = 1;
        } else {
          ilustracionesPermiso = 0;
        }
        if (juegosdemesaPermiso == "juegosdemesa") {
          juegosdemesaPermiso = 1;
        } else {
          juegosdemesaPermiso = 0;
        }

        if (videojuegosPermiso == "videojuegos") {
          videojuegosPermiso = 1;
        } else {
          videojuegosPermiso = 0;
        }

        res.render("secciones/juegosdemesa", {
          title: "juegosdemesa",
          loggeo,
          inicioPermiso,
          fotosPermiso,
          ilustracionesPermiso,
          juegosdemesaPermiso,
          videojuegosPermiso,
        });
      }
    );
  } else {
    res.redirect("/login");
  }
});
router.get("/videojuegos", function (req, res) {
  const loggeo = req.session.nombrelog;
  if (loggeo) {
    conexion.query(
      "select * from usuarios where email = ? and pass",
      [loggeo.email, loggeo.password],
      function (err, result, fields) {
        var inicioPermiso = result[0].inicio;
        var fotosPermiso = result[0].fotos;
        var ilustracionesPermiso = result[0].ilustraciones;
        var juegosdemesaPermiso = result[0].juegosdemesa;
        var videojuegosPermiso = result[0].videojuegos;

        if (inicioPermiso == "inicio") {
          inicioPermiso = 1;
        } else {
          inicioPermiso = 0;
        }
        if (fotosPermiso == "fotos") {
          fotosPermiso = 1;
        } else {
          fotosPermiso = 0;
        }
        if (ilustracionesPermiso == "ilustraciones") {
          ilustracionesPermiso = 1;
        } else {
          ilustracionesPermiso = 0;
        }
        if (juegosdemesaPermiso == "juegosdemesa") {
          juegosdemesaPermiso = 1;
        } else {
          juegosdemesaPermiso = 0;
        }

        if (videojuegosPermiso == "videojuegos") {
          videojuegosPermiso = 1;
        } else {
          videojuegosPermiso = 0;
        }

        res.render("secciones/videojuegos", {
          title: "videojuegos",
          loggeo,
          inicioPermiso,
          fotosPermiso,
          ilustracionesPermiso,
          juegosdemesaPermiso,
          videojuegosPermiso,
        });
      }
    );
  } else {
    res.redirect("/login");
  }
});

module.exports = router;
