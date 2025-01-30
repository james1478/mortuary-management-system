const mongoose = require('mongoose');

const DeceasedSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    min: 1,
  },
  dateOfDeath: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female'],
  },
  causeOfDeath: {
    type: String,
    required: true,
    trim: true,
  },
  familyNationalId: {
    type: String,
    required: true,
    unique: true,
    minlength: 8,
    maxlength: 8,
  },

  relationship: {
    type: String,
    required: true,
    enum: [
      'Husband',
      'Wife',
      'Father',
      'Mother',
      'Brother',
      'Sister',
      'Guardian',
    ],
  },
  familyFirstName: {
    type: String,
    required: true,
    trim: true,
  },
  familyLastName: {
    type: String,
    required: true,
    trim: true,
  },
  familyPhoneNumber: {
    type: String,
    required: true,
    match: [/^\d{10,13}$/, 'Invalid phone number'],
  },
  familyEmail: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, 'Invalid email format'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Deceased', DeceasedSchema);
