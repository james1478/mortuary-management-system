const bcrypt = require('bcryptjs');
const Admin = require('../models/adminModel');

function createSanitizedUserObject(user) {
  const sanitizedUser = { ...user._doc };
  delete sanitizedUser.password;
  return sanitizedUser;
}

module.exports = {
  registerAdmin: async (req, res, next) => {
    try {
      console.log('Request Body:', req.body); // Log request body
      const { username, password, email, role } = req.body;

      const usernameCheck = await Admin.findOne({ username });
      if (usernameCheck)
        return res.json({
          msg: 'This Username is already used. Please choose a different one.',
          status: false,
        });

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await Admin.create({
        username,
        password: hashedPassword,
        email,
        role,
      });
      const sanitizedUser = createSanitizedUserObject(user);
      return res.json({ status: true, user: sanitizedUser });
    } catch (error) {
      next(error);
    }
  },

  loginAdmin: async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const foundUser = await Admin.findOne({ username });
      if (!foundUser)
        return res.json({
          msg: 'Incorrect username or password.',
          status: false,
        });
      const isPasswordValid = await bcrypt.compare(
        password,
        foundUser.password
      );
      if (!isPasswordValid)
        return res.json({
          msg: 'Incorrect Password or Username.',
          status: false,
        });
      const sanitizedUser = createSanitizedUserObject(foundUser);
      return res.json({ status: true, foundUser: sanitizedUser });
    } catch (error) {
      next(error);
    }
  },

  updateAdmin: async (req, res, next) => {
    try {
      // Extract admin details from the request body.
      // It is assumed that _id, username, email, and optionally password are sent.
      const { _id, username, email, password } = req.body;
      const updateData = { username, email };

      // If a new password is provided, hash it before updating.
      if (password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        updateData.password = hashedPassword;
      }

      const updatedAdmin = await Admin.findByIdAndUpdate(_id, updateData, {
        new: true,
        runValidators: true,
      });

      if (!updatedAdmin) {
        return res.status(404).json({ status: false, msg: 'Admin not found.' });
      }
      const sanitizedUser = createSanitizedUserObject(updatedAdmin);
      return res.json({
        status: true,
        msg: 'Account updated successfully.',
        admin: sanitizedUser,
      });
    } catch (error) {
      next(error);
    }
  },

  deleteAdmin: async (req, res, next) => {
    try {
      // Expecting the admin's _id in the request body
      const { _id } = req.body;
      const deletedAdmin = await Admin.findByIdAndDelete(_id);

      if (!deletedAdmin) {
        return res.status(404).json({ status: false, msg: 'Admin not found.' });
      }
      return res.json({
        status: true,
        msg: 'Admin account deleted successfully.',
      });
    } catch (error) {
      next(error);
    }
  },
};
