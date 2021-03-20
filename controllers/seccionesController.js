module.exports = {
    inicio: function (req, res) {
        res.render('secciones/inicio', {title: 'Inicio'});
    },
    fotos: function(req, res){
        res.render('secciones/fotos', {title: 'Fotos'});
    },
    ilustraciones: function (req, res) {
        res.render('secciones/ilustraciones', {title: 'Ilustraciones'});
    },
    juegosdemesa: function(req, res){
        res.render('secciones/juegosdemesa', {title: 'Juegos de mesa'});
    },
    videojuegos: function (req, res) {
        res.render('secciones/videojuegos', {title: 'Videojuegos'});
    },

}