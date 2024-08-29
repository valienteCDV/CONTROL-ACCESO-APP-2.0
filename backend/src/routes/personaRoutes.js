// backend/src/routes/personaRoutes.js
const express = require('express');
const personaController = require('../controllers/personaController');
const router = express.Router();

router.get('/', personaController.getAllPersonas);
router.get('/:id', personaController.getPersonaById);
router.post('/', personaController.createPersona);
router.put('/:id', personaController.updatePersona);
router.delete('/:id', personaController.deletePersona);

module.exports = router;