// backend/src/app.js
const express = require('express');
const cors = require('cors');
const empresaRoutes = require('./routes/empresaRoutes');
const instalacionRoutes = require('./routes/instalacionRoutes');
const areaRoutes = require('./routes/areaRoutes');
const vehiculoRoutes = require('./routes/vehiculoRoutes');
const personaRoutes = require('./routes/personaRoutes');
// Importa aquí las demás rutas cuando las crees

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/empresas', empresaRoutes);
app.use('/api/instalaciones', instalacionRoutes);
app.use('/api/areas', areaRoutes);
app.use('/api/vehiculos', vehiculoRoutes);
app.use('/api/personas', personaRoutes);

// Agrega aquí las demás rutas cuando las crees

module.exports = app;