var express = require('express');
var router = express.Router();
var seccioneController = require('../controllers/seccionesController');

router.get('/inicio', seccioneController.inicio);
router.get('/fotos', seccioneController.fotos);
router.get('/ilustraciones', seccioneController.ilustraciones);
router.get('/juegosdemesa', seccioneController.juegosdemesa);
router.get('/videojuegos', seccioneController.videojuegos);

module.exports = router;