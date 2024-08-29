// backend/src/controllers/areaController.js
const { Area, Instalacion } = require('../models');

const areaController = {
  // Obtener todas las áreas
  getAllAreas: async (req, res) => {
    try {
      const areas = await Area.findAll({
        include: [{ model: Instalacion, as: 'instalacion' }]
      });
      res.json(areas);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener las áreas', error });
    }
  },

  // Obtener un área por ID
  getAreaById: async (req, res) => {
    try {
      const area = await Area.findByPk(req.params.id, {
        include: [{ model: Instalacion, as: 'instalacion' }]
      });
      if (area) {
        res.json(area);
      } else {
        res.status(404).json({ message: 'Área no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el área', error });
    }
  },

  // Crear una nueva área
  createArea: async (req, res) => {
    try {
      const newArea = await Area.create(req.body);
      res.status(201).json(newArea);
    } catch (error) {
      res.status(400).json({ message: 'Error al crear el área', error });
    }
  },

  // Actualizar un área
  updateArea: async (req, res) => {
    try {
      const [updated] = await Area.update(req.body, {
        where: { id: req.params.id }
      });
      if (updated) {
        const updatedArea = await Area.findByPk(req.params.id);
        res.json(updatedArea);
      } else {
        res.status(404).json({ message: 'Área no encontrada' });
      }
    } catch (error) {
      res.status(400).json({ message: 'Error al actualizar el área', error });
    }
  },

  // Eliminar un área
  deleteArea: async (req, res) => {
    try {
      const deleted = await Area.destroy({
        where: { id: req.params.id }
      });
      if (deleted) {
        res.status(204).send("Área eliminada");
      } else {
        res.status(404).json({ message: 'Área no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el área', error });
    }
  }
};

module.exports = areaController;