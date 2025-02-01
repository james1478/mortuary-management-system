const Inventory = require('../models/inventoryModel');

module.exports = {
  // Add inventory item
  addInventory: async (req, res) => {
    try {
      const {
        itemName,
        category,
        quantity,
        unitPrice,
        dateOfPurchase,
        description,
        supplierName,
        supplierPhone,
        supplierEmail,
        supplierAddress,
      } = req.body;

      const newInventory = new Inventory({
        itemName,
        category,
        quantity,
        unitPrice,
        dateOfPurchase,
        description,
        supplier: {
          name: supplierName,
          phone: supplierPhone,
          email: supplierEmail,
          address: supplierAddress,
        },
      });

      await newInventory.save();
      res
        .status(201)
        .json({ status: true, msg: 'Inventory item added successfully!' });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ status: false, msg: 'Failed to add inventory item.' });
    }
  },

  // Retrieve all inventory items
  getAllInventory: async (req, res, next) => {
    try {
      const items = await Inventory.find().sort({ createdAt: -1 });
      return res.json({ status: true, items });
    } catch (error) {
      next(error);
    }
  },

  // Retrieve an inventory item by ID
  getInventoryById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const item = await Inventory.findById(id);
      if (!item)
        return res.status(404).json({
          status: false,
          msg: 'Inventory item not found.',
        });
      return res.json({ status: true, item });
    } catch (error) {
      next(error);
    }
  },

  // Update an inventory item
  updateInventory: async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedItem = await Inventory.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!updatedItem)
        return res.status(404).json({
          status: false,
          msg: 'Inventory item not found.',
        });
      return res.json({
        status: true,
        msg: 'Inventory item updated successfully.',
        updatedItem,
      });
    } catch (error) {
      next(error);
    }
  },

  // Delete an inventory item
  deleteInventory: async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedItem = await Inventory.findByIdAndDelete(id);
      if (!deletedItem)
        return res.status(404).json({
          status: false,
          msg: 'Inventory item not found.',
        });
      return res.json({
        status: true,
        msg: 'Inventory item deleted successfully.',
      });
    } catch (error) {
      next(error);
    }
  },
};
