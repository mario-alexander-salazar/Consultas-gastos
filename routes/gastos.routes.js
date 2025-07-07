const express = require('express');
const router = express.Router();
const gasto = require('../data/gastos.controllers');

router.get('/', gasto.getGastos);
router.get('/:id', gasto.getGasto);
router.post('/', gasto.createGastos);
router.put('/:id', gasto.editGasto);
router.delete('/:id', gasto.deleteGasto);

module.exports = router;
