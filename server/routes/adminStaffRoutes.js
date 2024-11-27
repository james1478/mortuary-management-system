const express = require('express');
const { registerAdmin } = require('../controllers/adminController');
const router = express.Router();

// Define routes
router.post('/registeradmin', registerAdmin);

// Export the router
module.exports = router;
