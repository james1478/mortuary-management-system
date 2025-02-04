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
          foundUser,
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
};
