// controllers/staffController.js
const Staff = require('../models/staffModel');

exports.addStaff = async (req, res) => {
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
    res
      .status(200)
      .json({ status: true, msg: 'Staff member added successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, msg: 'Failed to add staff member.' });
  }
};

exports.getAllStaff = async (req, res) => {
  try {
    const staffMembers = await Staff.find();
    res.status(200).json(staffMembers);
  } catch (error) {
    res
      .status(500)
      .json({ status: false, msg: 'Failed to fetch staff members.' });
  }
};
