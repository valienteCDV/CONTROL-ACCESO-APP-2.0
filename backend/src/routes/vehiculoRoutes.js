// backend/src/routes/vehiculoRoutes.js
const express = require('express');
const vehiculoController = require('../controllers/vehiculoController');
const router = express.Router();

router.get('/', vehiculoController.getAllVehiculos);
router.get('/:id', vehiculoController.getVehiculoById);
router.post('/', vehiculoController.createVehiculo);
router.put('/:id', vehiculoController.updateVehiculo);
router.delete('/:id', vehiculoController.deleteVehiculo);

module.exports = router;
