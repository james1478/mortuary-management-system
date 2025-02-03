const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      minlength: 3,
    },
    phone: {
      type: String,
      required: true,
      minlength: 10,
    },
    NationalId: {
      type: String,
      required: true,
      unique: true,
      minlength: 8,
      maxlength: 8,
    },
    email: {
      type: String,
      required: true,
      match: /\S+@\S+\.\S+/,
    },
    address: {
      type: String,
      required: true,
      minlength: 5,
    },
    position: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    dateOfHire: {
      type: Date,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
      min: 0,
    },
    emergencyName: {
      type: String,
      required: true,
      minlength: 3,
    },
    emergencyPhone: {
      type: String,
      required: true,
      minlength: 10,
    },
    emergencyEmail: {
      type: String,
      required: true,
      match: /\S+@\S+\.\S+/,
    },
    emergencyAddress: {
      type: String,
      required: true,
      minlength: 5,
    },
    emergencyRelationship: {
      type: String,
      required: true,
    },
    available: {
      type: Boolean,
      default: true, // New staff members are available by default
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Staff', staffSchema);
