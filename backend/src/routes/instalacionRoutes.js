// backend/src/routes/instalacionRoutes.js
const express = require('express');
const instalacionController = require('../controllers/instalacionController');
const router = express.Router();

router.get('/', instalacionController.getAll);
router.get('/:id', instalacionController.getById);
router.post('/', instalacionController.create);
router.put('/:id', instalacionController.update);
router.delete('/:id', instalacionController.delete);

module.exports = router;