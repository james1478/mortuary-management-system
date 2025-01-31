const Deceased = require('../models/deceasedModel');

module.exports = {
  // Create a new deceased record
  addDeceased: async (req, res, next) => {
    try {
      console.log('Request Body:', req.body); // Log request body for debugging
      const {
        firstName,
        lastName,
        age,
        dateOfDeath,
        gender,
        causeOfDeath,
        familyNationalId,
        relationship,
        familyFirstName,
        familyLastName,
        familyPhoneNumber,
        familyEmail,
        familyAddress,
      } = req.body;

      // Check if the family National ID already exists
      const idCheck = await Deceased.findOne({ familyNationalId });
      if (idCheck)
        return res.status(400).json({
          msg: 'A deceased record with this family National ID already exists.',
          status: false,
        });

      // Create deceased record
      const deceased = await Deceased.create({
        firstName,
        lastName,
        age,
        dateOfDeath,
        gender,
        causeOfDeath,
        familyNationalId,
        relationship,
        familyFirstName,
        familyLastName,
        familyPhoneNumber,
        familyEmail,
        familyAddress,
      });

      return res.status(201).json({
        status: true,
        msg: 'Deceased record added successfully.',
        deceased,
      });
    } catch (error) {
      next(error);
    }
  },

  // Retrieve all deceased records
  getAllDeceased: async (req, res, next) => {
    try {
      const deceasedList = await Deceased.find().sort({ createdAt: -1 });
      return res.json({ status: true, deceasedList });
    } catch (error) {
      next(error);
    }
  },

  // Retrieve a single deceased record by ID
  getDeceasedById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const deceased = await Deceased.findById(id);
      if (!deceased)
        return res.status(404).json({
          msg: 'Deceased record not found.',
          status: false,
        });

      return res.json({ status: true, deceased });
    } catch (error) {
      next(error);
    }
  },

  //update deceased
  updateDeceased: async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedDeceased = await Deceased.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });

      if (!updatedDeceased)
        return res.status(404).json({
          msg: 'Deceased record not found.',
          status: false,
        });

      return res.json({
        status: true,
        msg: 'Deceased record updated successfully.',
        updatedDeceased,
      });
    } catch (error) {
      next(error);
    }
  },
  // Delete a deceased record by ID
  deleteDeceased: async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedDeceased = await Deceased.findByIdAndDelete(id);

      if (!deletedDeceased)
        return res.status(404).json({
          msg: 'Deceased record not found.',
          status: false,
        });

      return res.json({
        status: true,
        msg: 'Deceased record deleted successfully.',
      });
    } catch (error) {
      next(error);
    }
  },
};
