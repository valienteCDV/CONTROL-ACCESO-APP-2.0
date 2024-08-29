// backend/src/controllers/empresaController.js
const { Empresa } = require('../models');

const empresaController = {
  // Obtener todas las empresas
  getAll: async (req, res) => {
    try {
      const empresas = await Empresa.findAll();
      res.json(empresas);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener las empresas', error });
    }
  },

  // Obtener una empresa por ID
  getById: async (req, res) => {
    try {
      const empresa = await Empresa.findByPk(req.params.id);
      if (empresa) {
        res.json(empresa);
      } else {
        res.status(404).json({ message: 'Empresa no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener la empresa', error });
    }
  },

  // Crear una nueva empresa
  create: async (req, res) => {
    try {
      const nuevaEmpresa = await Empresa.create(req.body);
      res.status(201).json(nuevaEmpresa);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear la empresa', error });
    }
  },

  // Actualizar una empresa
  update: async (req, res) => {
    try {
      const [updated] = await Empresa.update(req.body, {
        where: { id: req.params.id }
      });
      if (updated) {
        const updatedEmpresa = await Empresa.findByPk(req.params.id);
        res.json(updatedEmpresa);
      } else {
        res.status(404).json({ message: 'Empresa no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar la empresa', error });
    }
  },

  // Eliminar una empresa
  delete: async (req, res) => {
    try {
      const deleted = await Empresa.destroy({
        where: { id: req.params.id }
      });
      if (deleted) {
        res.status(204).send("Empresa eliminada");
      } else {
        res.status(404).json({ message: 'Empresa no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar la empresa', error });
    }
  }
};

module.exports = empresaController;