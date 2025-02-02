// server/controllers/staffController.js
const Staff = require('../models/staffModel');

module.exports = {
  // Create a new staff member
  addStaff: async (req, res, next) => {
    try {
      const {
        fullName,
        phone,
        email,
        address,
        position,
        department,
        dateOfHire,
        salary,
        emergencyName,
        emergencyPhone,
        emergencyEmail,
        emergencyAddress,
        emergencyRelationship,
      } = req.body;

      const newStaff = new Staff({
        fullName,
        phone,
        email,
        address,
        position,
        department,
        dateOfHire,
        salary,
        emergencyName,
        emergencyPhone,
        emergencyEmail,
        emergencyAddress,
        emergencyRelationship,
      });

      await newStaff.save();
      return res.status(201).json({
        status: true,
        msg: 'Staff member added successfully!',
        staff: newStaff,
      });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ status: false, msg: 'Failed to add staff member.' });
    }
  },

  // Retrieve all staff members
  getAllStaff: async (req, res, next) => {
    try {
      const staffList = await Staff.find().sort({ createdAt: -1 });
      return res.json({ status: true, staffList });
    } catch (error) {
      next(error);
    }
  },

  // Retrieve a single staff member by ID
  getStaffById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const staff = await Staff.findById(id);
      if (!staff)
        return res
          .status(404)
          .json({ status: false, msg: 'Staff member not found.' });
      return res.json({ status: true, staff });
    } catch (error) {
      next(error);
    }
  },

  // Update a staff member
  updateStaff: async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedStaff = await Staff.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!updatedStaff)
        return res
          .status(404)
          .json({ status: false, msg: 'Staff member not found.' });
      return res.json({
        status: true,
        msg: 'Staff member updated successfully.',
        updatedStaff,
      });
    } catch (error) {
      next(error);
    }
  },

  // Delete a staff member
  deleteStaff: async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedStaff = await Staff.findByIdAndDelete(id);
      if (!deletedStaff)
        return res
          .status(404)
          .json({ status: false, msg: 'Staff member not found.' });
      return res.json({
        status: true,
        msg: 'Staff member deleted successfully.',
      });
    } catch (error) {
      next(error);
    }
  },
};
