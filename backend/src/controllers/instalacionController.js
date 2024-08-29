// backend/src/controllers/instalacionController.js
const { Instalacion } = require('../models');

const instalacionController = {
  getAll: async (req, res) => {
    try {
      const instalaciones = await Instalacion.findAll();
      res.json(instalaciones);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener las instalaciones', error });
    }
  },

  getById: async (req, res) => {
    try {
      const instalacion = await Instalacion.findByPk(req.params.id);
      if (instalacion) {
        res.json(instalacion);
      } else {
        res.status(404).json({ message: 'Instalación no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener la instalación', error });
    }
  },

  create: async (req, res) => {
    try {
      const nuevaInstalacion = await Instalacion.create(req.body);
      res.status(201).json(nuevaInstalacion);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear la instalación', error });
    }
  },

  update: async (req, res) => {
    try {
      const [updated] = await Instalacion.update(req.body, {
        where: { id: req.params.id }
      });
      if (updated) {
        const updatedInstalacion = await Instalacion.findByPk(req.params.id);
        res.json(updatedInstalacion);
      } else {
        res.status(404).json({ message: 'Instalación no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar la instalación', error });
    }
  },

  delete: async (req, res) => {
    try {
      const deleted = await Instalacion.destroy({
        where: { id: req.params.id }
      });
      if (deleted) {
        res.status(204).send("Instalación eliminada");
      } else {
        res.status(404).json({ message: 'Instalación no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar la instalación', error });
    }
  }
};

module.exports = instalacionController;