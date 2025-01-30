const Inventory = require("../models/inventoryModel");

// Add inventory item
const addInventoryItem = async (req, res) => {
  try {
    const { itemName, category, quantity, unitPrice, dateOfPurchase, description, supplierName, supplierPhone, supplierEmail, supplierAddress } = req.body;

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
    res.status(201).json({ status: true, msg: "Inventory item added successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, msg: "Failed to add inventory item." });
  }
};

// Get all inventory items
const getAllInventoryItems = async (req, res) => {
  try {
    const inventoryItems = await Inventory.find();
    res.status(200).json(inventoryItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Failed to fetch inventory items." });
  }
};

module.exports = { addInventoryItem, getAllInventoryItems };
