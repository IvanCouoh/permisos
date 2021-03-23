

module.exports = {
    inicio: function (req, res) {
        const loggeo = req.session.nombrelog;
        res.render('secciones/inicio', {title: 'Inicio', loggeo});
    },
    fotos: function(req, res){
        const loggeo = req.session.nombrelog;
        res.render('secciones/fotos', {title: 'Fotos', loggeo});
    },
    ilustraciones: function (req, res) {
        const loggeo = req.session.nombrelog;
        res.render('secciones/ilustraciones', {title: 'Ilustraciones',loggeo});
    },
    juegosdemesa: function(req, res){
        const loggeo = req.session.nombrelog;
        res.render('secciones/juegosdemesa', {title: 'Juegos de mesa',loggeo});
    },
    videojuegos: function (req, res) {
        const loggeo = req.session.nombrelog;
        res.render('secciones/videojuegos', {title: 'Videojuegos',loggeo});
    },

}