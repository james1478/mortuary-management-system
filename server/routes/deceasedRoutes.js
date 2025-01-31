const express = require('express');
const router = express.Router();
const deceasedController = require('../controllers/deceasedController');

// Define routes
router.post('/add', deceasedController.addDeceased);
router.get('/getDeceased', deceasedController.getAllDeceased);
router.get('/:id', deceasedController.getDeceasedById);
router.put('/:id', deceasedController.updateDeceased);
router.delete('/:id', deceasedController.deleteDeceased);
router.get('/:id', deceasedController.getDeceasedById);

module.exports = router;
