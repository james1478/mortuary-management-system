const express = require('express');
const { registerAdmin, loginAdmin } = require('../controllers/adminController');
const router = express.Router();

// Define routes
router.post('/registeradmin', registerAdmin);
router.post('/loginadmin', loginAdmin);

// Export the router
module.exports = router;
