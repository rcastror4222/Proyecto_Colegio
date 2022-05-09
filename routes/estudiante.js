//Rutas para productos
const express = require('express');
const router = express.Router();
const estudianteControllers = require('../controllers/estudianteControllers');

//api/estiduante
router.post('/',estudianteControllers.crearEstudiante);
router.get('/',estudianteControllers.obtenerEstudiantes);
router.put('/:id',estudianteControllers.actualizarEstudiantes);
router.get('/:id',estudianteControllers.obtenerEstudiante);
router.delete('/:id',estudianteControllers.eliminarEstudiante);


module.exports = router;