var express = require("express");
var router = express.Router();
var conexion = require("../config/conexion");

module.exports = {
  permisos: function (req, res, next) {
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

        if (videojuegosPermiso == "juegosdemesa") {
          videojuegosPermiso = 1;
        } else {
          videojuegosPermiso = 0;
        }
      }
    )
  }
};
