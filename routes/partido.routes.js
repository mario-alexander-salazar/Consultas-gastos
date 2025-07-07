const express = require('express');
const router = express.Router();
const datosPartido = require('../data/partido.json'); // Asegúrate de que el archivo exista y tenga formato JSON válido

// Ruta para obtener los datos del partido
router.get('/partido', (req, res) => {
  if (datosPartido) {
    res.status(200).json(datosPartido);
  } else {
    res.status(404).json({ mensaje: 'Datos del partido no disponibles' });
  }
});

module.exports = router;
