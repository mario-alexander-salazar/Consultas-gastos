const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const app = express();

// Conexión a la base de datos
require('./database');

const URI = 'mongodb+srv://msalazar:<CXaPc7Q8nPxVffMe>@cluster0.nce8d7z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware personalizado para mostrar la ruta accedida
app.use((req, res, next) => {
  console.log('Ruta Recibida: ' + req.protocol + '://' + req.get('host') + req.originalUrl);
  next();
});

// Ruta de bienvenida
app.get('/', (req, res) => {
  res.send('Bienvenido al servidor de consultas del Director Técnico');
});

// Ruta para leer y mostrar el archivo gastos.json
app.get('/api/gastos-json', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'gastos.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo JSON:', err);
      return res.status(500).json({ error: 'Error al leer el archivo JSON' });
    }
    try {
      const gastos = JSON.parse(data);
      res.json(gastos);
    } catch (parseErr) {
      res.status(500).json({ error: 'El archivo JSON está mal formado' });
    }
  });
});

// Rutas CRUD de gastos conectadas a MongoDB
app.use('/api/gastos', require('./routes/gastos.routes'));

// Arranque del servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
