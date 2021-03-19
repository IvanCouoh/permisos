var conexion = require('../config/conexion');
var usuario = require('../models/usuarioModel');
var borrar = require('fs');

module.exports = {
    index: function (req, res) {
        usuario.obtener(conexion, function (error, datos) {
            console.log(datos);
            res.render('usuarios/index', { title: 'Aplicacion', usuarios: datos });
        })
    },

    crear: function (req, res) {
        res.render('usuarios/crear');
    },

    guardar: function (req, res) {
        console.log(req.body);
        console.log(req.file.filename);
        usuario.insertar(conexion, req.body, req.file, function (err) {
            res.redirect('/usuarios');
        })
    },

    eliminar: function (req, res) {
        console.log(req.params.id)
        usuario.retornarDatosID(conexion, req.params.id, function (error, registros) {
            var nombreImagen = 'public/images/' + (registros[0].imagen)
            if (borrar.existsSync(nombreImagen)) {
                borrar.unlinkSync(nombreImagen);
            }
            usuario.borrar(conexion, req.params.id, function (error) {
                res.redirect('/usuarios');
            })
        })
    },

    editar: function (req, res) {
        usuario.retornarDatosID(conexion, req.params.id, function (error, registros) {
            console.log(registros[0]);
            res.render('usuarios/editar', { usuarios: registros[0] });
        })
    },
    actualizar: function (req, res) {
        console.log(req.body.nombre);
        // console.log(req.file.filename);
        if (req.file) {
            if (req.file.filename) {
                usuario.retornarDatosID(conexion, req.body.id, function (error, registros) {
                    var nombreImagen = 'public/images/' + (registros[0].imagen)
                    if (borrar.existsSync(nombreImagen)) {
                        borrar.unlinkSync(nombreImagen);
                    }
                    usuario.actualizarImagen(conexion, req.body, req.file, function (error) { })
                })
            }
        }
        if (req.body.nombre || req.body.email || req.body.pass) {
            usuario.actualizar(conexion, req.body, function (error) { })
        }
        res.redirect('/usuarios');
    }
}