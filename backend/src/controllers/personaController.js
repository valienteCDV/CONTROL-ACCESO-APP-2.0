// backend/src/controllers/personaController.js
const { Persona, Empresa, Vehiculo } = require('../models');

const personaController = {
  // Obtener todas las personas
  getAllPersonas: async (req, res) => {
    try {
      const personas = await Persona.findAll({
        include: [
          { model: Empresa, as: 'empresa' },
          { model: Vehiculo, as: 'vehiculos' }
        ]
      });
      res.json(personas);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener las personas', error });
    }
  },

  // Obtener una persona por ID
  getPersonaById: async (req, res) => {
    try {
      const persona = await Persona.findByPk(req.params.id, {
        include: [
          { model: Empresa, as: 'empresa' },
          { model: Vehiculo, as: 'vehiculos' }
        ]
      });
      if (persona) {
        res.json(persona);
      } else {
        res.status(404).json({ message: 'Persona no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener la persona', error });
    }
  },

  // Crear una nueva persona
  createPersona: async (req, res) => {
    try {
      const newPersona = await Persona.create(req.body);
      res.status(201).json(newPersona);
    } catch (error) {
      res.status(400).json({ message: 'Error al crear la persona', error });
    }
  },

  // Actualizar una persona
  updatePersona: async (req, res) => {
    try {
      const [updated] = await Persona.update(req.body, {
        where: { id: req.params.id }
      });
      if (updated) {
        const updatedPersona = await Persona.findByPk(req.params.id);
        res.json(updatedPersona);
      } else {
        res.status(404).json({ message: 'Persona no encontrada' });
      }
    } catch (error) {
      res.status(400).json({ message: 'Error al actualizar la persona', error });
    }
  },

  // Eliminar una persona (soft delete)
  deletePersona: async (req, res) => {
    try {
      const updated = await Persona.update({ activo: false }, {
        where: { id: req.params.id }
      });
      if (updated) {
        res.status(200).json({ message: 'Persona desactivada' });
      } else {
        res.status(404).json({ message: 'Persona no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al desactivar la persona', error });
    }
  }
};

module.exports = personaController;