const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Define booking routes
router.post('/add', bookingController.addBooking);
router.get('/getbookings', bookingController.getAllBookings);
router.get('/:id', bookingController.getBookingById);
router.put('/:id', bookingController.updateBooking);
router.delete('/:id', bookingController.deleteBooking);

module.exports = router;
