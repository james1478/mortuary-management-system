const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    serviceType: {
      type: String,
      required: true,
      enum: ['Burial', 'Cremation', 'Memorial'],
    },
    deceased: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Deceased',
      required: true,
    },
    // Updated to be an array of ObjectIds
    staffAssigned: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Staff',
      },
    ],
    notes: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Booking', bookingSchema);
