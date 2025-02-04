// server/routes/accountSettingsRoutes.js
const express = require('express');
const router = express.Router();
const { updateAdmin, deleteAdmin } = require('../controllers/adminController');

// Endpoint to update admin account details
router.put('/update', updateAdmin);

// Endpoint to delete admin account
router.delete('/delete', deleteAdmin);

module.exports = router;
