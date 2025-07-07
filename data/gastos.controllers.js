const Gasto = require('../data/gastos'); // modelo correcto
const gastosController = {};

// GET todos los gastos
gastosController.getGastos = async (req, res) => {
    const gastos = await Gasto.find();
    res.json(gastos);
};

// GET gasto por ID
gastosController.getGasto = async (req, res) => {
    const gasto = await Gasto.findById(req.params.id);
    res.json(gasto);
};

// POST nuevo gasto
gastosController.createGastos = async (req, res) => {
    console.log('BODY RECIBIDO:', req.body); // para verificar
    const gasto = new Gasto(req.body);
    await gasto.save();
    res.json({ status: 'Gasto guardado' });
};

// PUT actualizar gasto
gastosController.editGasto = async (req, res) => {
    const { id } = req.params;
    const gasto = {
        tipo: req.body.tipo,
        ruc: req.body.ruc,
        empresa: req.body.empresa,
        monto: req.body.monto,
        descripcion: req.body.descripcion
    };
    await Gasto.findByIdAndUpdate(id, { $set: gasto }, { new: true });
    res.json({ status: 'Gasto actualizado' });
};

// DELETE eliminar gasto
gastosController.deleteGasto = async (req, res) => {
    await Gasto.findByIdAndDelete(req.params.id);
    res.json({ status: 'Gasto eliminado' });
};

module.exports = gastosController;


