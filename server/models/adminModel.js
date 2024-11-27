const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 30,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 5,
    max: 30,
  },
  role: {
    type: String,
    enum: ['admin', 'staff'],
    default: 'staff',
  },
  email: {
    type: String,
    required: true,
    min: 11,
    max: 40,
    unique: true,
  },
});
module.exports = mongoose.model('admin', adminSchema);
