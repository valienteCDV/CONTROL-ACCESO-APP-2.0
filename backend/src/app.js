// backend/src/app.js
const express = require('express');
const cors = require('cors');
const empresaRoutes = require('./routes/empresaRoutes');
const instalacionRoutes = require('./routes/instalacionRoutes');
// Importa aquí las demás rutas cuando las crees

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/empresas', empresaRoutes);
app.use('/api/instalaciones', instalacionRoutes);
// Agrega aquí las demás rutas cuando las crees

module.exports = app;