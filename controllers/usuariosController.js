var conexion = require("../config/conexion");
var usuario = require("../models/usuarioModel");
var borrar = require("fs");

module.exports = {
  index: function (req, res) {
    const loggeo = req.session.nombrelogadm;
    if (loggeo) {
      usuario.obtener(conexion, function (error, datos) {
        console.log(datos);

        res.render("usuarios/index", {
          title: "Aplicacion",
          usuarios: datos,
          loggeo,
        });
        console.log(loggeo);
      });
    } else {
      res.redirect("/login");
    }
  },

  crear: function (req, res) {
    const loggeo = req.session.nombrelogadm;
    res.render("usuarios/crear", { loggeo });
  },

  guardar: function (req, res) {
    console.log(req.body);
    console.log(req.file.filename);
    const loggeo = req.session.nombrelogadm;
    usuario.insertar(conexion, req.body, req.file, function (err) {
      res.render("usuarios/crear", {
        loggeo,
        alert: true,
        alertTitle: "Registro",
        alertMessage: "Se ha registrado correctamente el usuario.",
        alertIcon: "success",
        showConfirmButton: false,
        timer: 1500,
        ruta: "usuarios",
      });
    });
  },

  eliminar: function (req, res) {
    const loggeo = req.session.nombrelogadm;
    console.log(req.params.id);
    usuario.retornarDatosID(
      conexion,
      req.params.id,
      function (error, registros) {
        var nombreImagen = "public/images/" + registros[0].imagen;
        if (borrar.existsSync(nombreImagen)) {
          borrar.unlinkSync(nombreImagen);
        }
        usuario.borrar(conexion, req.params.id, function (error) {});
        res.redirect("/usuarios");
      }
    );
  },
  editar: function (req, res) {
    const loggeo = req.session.nombrelogadm;
    usuario.retornarDatosID(
      conexion,
      req.params.id,
      function (error, registros) {
        console.log(registros[0]);
        res.render("usuarios/editar", { usuarios: registros[0], loggeo });
      }
    );
  },
  actualizar: function (req, res) {
    console.log(req.body.nombre);
    // console.log(req.file.filename);
    if (req.file) {
      if (req.file.filename) {
        usuario.retornarDatosID(
          conexion,
          req.body.id,
          function (error, registros) {
            var nombreImagen = "public/images/" + registros[0].imagen;
            if (borrar.existsSync(nombreImagen)) {
              borrar.unlinkSync(nombreImagen);
            }
            usuario.actualizarImagen(
              conexion,
              req.body,
              req.file,
              function (error) {}
            );
          }
        );
      }
    }
    if (req.body.nombre || req.body.email || req.body.pass) {
      const loggeo = req.session.nombrelogadm;
      usuario.actualizar(conexion, req.body, function (error) {
        res.render("usuarios/crear", {
          loggeo,
          alert: true,
          alertTitle: "Actualización",
          alertMessage: "El usuario se ha actualizado correctamente.",
          alertIcon: "success",
          showConfirmButton: false,
          timer: 1500,
          ruta: "usuarios",
        });
      });
    }
  },
};
