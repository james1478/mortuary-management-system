const express = require('express');
const router = express.Router();
const {
  addInventoryItem,
  getAllInventoryItems,
} = require('../controllers/inventoryController');

// Route to add a new inventory item
router.post('/addinventory', addInventoryItem);

// Route to get all inventory items
router.get('/getinventory', getAllInventoryItems);

module.exports = router;
