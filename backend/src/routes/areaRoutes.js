// backend/src/routes/areaRoutes.js
const express = require('express');
const areaController = require('../controllers/areaController');
const router = express.Router();

router.get('/', areaController.getAllAreas);
router.get('/:id', areaController.getAreaById);
router.post('/', areaController.createArea);
router.put('/:id', areaController.updateArea);
router.delete('/:id', areaController.deleteArea);

module.exports = router;