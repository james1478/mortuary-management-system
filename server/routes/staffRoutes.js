// routes/staffRoutes.js
const express = require('express');
const { addStaff, getAllStaff } = require('../controllers/staffController');
const router = express.Router();

router.post('/addstaff', addStaff);
router.get('/allstaff', getAllStaff);

module.exports = router;
