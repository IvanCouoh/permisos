module.exports = {
  inicio: function (req, res) {
    const loggeo = req.session.nombrelog;

    if (loggeo) {
      res.render("secciones/inicio", { title: "Inicio", loggeo });
    } else {
      res.redirect("/login");
    }
  },
  fotos: function (req, res) {
    const loggeo = req.session.nombrelog;
    if (loggeo) {
      res.render("secciones/fotos", { title: "Fotos", loggeo });
    } else {
      res.redirect("/login");
    }
  },
  ilustraciones: function (req, res) {
    const loggeo = req.session.nombrelog;
    if (loggeo) {
      res.render("secciones/ilustraciones", { title: "Ilustraciones", loggeo });
    } else {
      res.redirect("/login");
    }
  },
  juegosdemesa: function (req, res) {
    const loggeo = req.session.nombrelog;
    if (loggeo) {
      res.render("secciones/juegosdemesa", { title: "Juegos de mesa", loggeo });
    } else {
      res.redirect("/login");
    }
  },
  videojuegos: function (req, res) {
    const loggeo = req.session.nombrelog;
    if (loggeo) {
      res.render("secciones/videojuegos", { title: "Videojuegos", loggeo });
    } else {
      res.redirect("/login");
    }
  },
};
