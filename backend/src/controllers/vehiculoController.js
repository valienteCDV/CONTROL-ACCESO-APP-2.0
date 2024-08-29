// backend/src/controllers/vehiculoController.js
const { Vehiculo, Persona } = require('../models');

const vehiculoController = {
  // Obtener todos los vehículos
  getAllVehiculos: async (req, res) => {
    try {
      const vehiculos = await Vehiculo.findAll({
        include: [{ model: Persona, as: 'propietario' }]
      });
      res.json(vehiculos);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los vehículos', error });
    }
  },

  // Obtener un vehículo por ID
  getVehiculoById: async (req, res) => {
    try {
      const vehiculo = await Vehiculo.findByPk(req.params.id, {
        include: [{ model: Persona, as: 'propietario' }]
      });
      if (vehiculo) {
        res.json(vehiculo);
      } else {
        res.status(404).json({ message: 'Vehículo no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el vehículo', error });
    }
  },

  // Crear un nuevo vehículo
  createVehiculo: async (req, res) => {
    try {
      const newVehiculo = await Vehiculo.create(req.body);
      res.status(201).json(newVehiculo);
    } catch (error) {
      res.status(400).json({ message: 'Error al crear el vehículo', error });
    }
  },

  // Actualizar un vehículo
  updateVehiculo: async (req, res) => {
    try {
      const [updated] = await Vehiculo.update(req.body, {
        where: { id: req.params.id }
      });
      if (updated) {
        const updatedVehiculo = await Vehiculo.findByPk(req.params.id);
        res.json(updatedVehiculo);
      } else {
        res.status(404).json({ message: 'Vehículo no encontrado' });
      }
    } catch (error) {
      res.status(400).json({ message: 'Error al actualizar el vehículo', error });
    }
  },

  // Eliminar un vehículo (soft delete)
  deleteVehiculo: async (req, res) => {
    try {
      const updated = await Vehiculo.update({ es_activo: false }, {
        where: { id: req.params.id }
      });
      if (updated) {
        res.status(200).json({ message: 'Vehículo desactivado' });
      } else {
        res.status(404).json({ message: 'Vehículo no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al desactivar el vehículo', error });
    }
  }
};

module.exports = vehiculoController;