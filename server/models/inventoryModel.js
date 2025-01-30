const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
    minlength: 3,
  },
  category: {
    type: String,
    required: true,
    enum: ['Equipment', 'Consumables', 'Clothing'],
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  unitPrice: {
    type: Number,
    required: true,
    min: 1,
  },
  dateOfPurchase: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    maxlength: 200,
  },
  supplier: {
    name: {
      type: String,
      required: true,
      minlength: 3,
    },
    phone: {
      type: String,
      required: true,
      minlength: 10,
    },
    email: {
      type: String,
      required: true,
      match: /.+\@.+\..+/,
    },
    address: {
      type: String,
      required: true,
      minlength: 5,
    },
  },
});

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;
