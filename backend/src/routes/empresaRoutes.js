// backend/src/routes/empresaRoutes.js
const express = require('express');
const empresaController = require('../controllers/empresaController');
const router = express.Router();

router.get('/', empresaController.getAll);
router.get('/:id', empresaController.getById);
router.post('/', empresaController.create);
router.put('/:id', empresaController.update);
router.delete('/:id', empresaController.delete);

module.exports = router;