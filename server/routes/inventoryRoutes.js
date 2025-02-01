// server/routes/inventoryRoutes.js
const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

router.post('/addinventory', inventoryController.addInventory);
router.get('/getinventory', inventoryController.getAllInventory);
router.get('/:id', inventoryController.getInventoryById);
router.put('/:id', inventoryController.updateInventory);
router.delete('/:id', inventoryController.deleteInventory);

module.exports = router;
