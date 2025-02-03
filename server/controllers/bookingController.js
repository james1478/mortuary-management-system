const Booking = require('../models/bookingModel');
const Deceased = require('../models/deceasedModel');
const Staff = require('../models/staffModel');

module.exports = {
  // Add a new booking with automatic staff assignment and deceased validation
  addBooking: async (req, res, next) => {
    try {
      console.log('Received booking request:', req.body);
      const { date, serviceType, deceasedNationalId, notes } = req.body;

      // Validate deceasedNationalId format (example regex for validation)
      if (!/^\d{8}$/.test(deceasedNationalId)) {
        return res.status(400).json({
          status: false,
          msg: 'Invalid National ID format.',
        });
      }

      // Validate that the deceased exists using the provided National ID number.
      const deceased = await Deceased.findOne({
        deceasedNationalId: deceasedNationalId,
      });
      console.log('Deceased found:', deceased);

      if (!deceased) {
        return res.status(404).json({
          status: false,
          msg: 'No deceased record found for the given National ID number.',
        });
      }

      let assignedStaff = [];

      // Automatically assign staff based on service type
      if (serviceType === 'Burial') {
        const mortician = await Staff.findOne({
          position: 'Mortician',
          available: true,
        });
        const funeralPlanner = await Staff.findOne({
          position: 'Funeral Planner',
          available: true,
        });
        const securityGuard = await Staff.findOne({
          position: 'Security Guard',
          available: true,
        });

        if (mortician) assignedStaff.push(mortician._id);
        if (funeralPlanner) assignedStaff.push(funeralPlanner._id);
        if (securityGuard) assignedStaff.push(securityGuard._id);
      } else if (serviceType === 'Cremation') {
        const cremationOperator = await Staff.findOne({
          position: 'Crematorium Operator',
          available: true,
        });
        if (cremationOperator) assignedStaff.push(cremationOperator._id);
      } else if (serviceType === 'Memorial') {
        const funeralPlanner = await Staff.findOne({
          position: 'Funeral Planner',
          available: true,
        });
        const securityGuard = await Staff.findOne({
          position: 'Security Guard',
          available: true,
        });

        if (funeralPlanner) assignedStaff.push(funeralPlanner._id);
        if (securityGuard) assignedStaff.push(securityGuard._id);
      }

      console.log('Assigned Staff array:', assignedStaff);
      if (assignedStaff.length === 0) {
        return res.status(400).json({
          status: false,
          msg: 'No available staff for this service.',
        });
      }

      // Create the booking
      const newBooking = new Booking({
        date,
        serviceType,
        deceased: deceased._id, // Associate with deceased record
        assignedStaff,
        notes,
      });

      // Save the booking
      await newBooking.save();

      // Mark assigned staff as unavailable only after the booking is saved
      await Staff.updateMany(
        { _id: { $in: assignedStaff } },
        { available: false }
      );

      return res.status(201).json({
        status: true,
        msg: 'Booking added successfully!',
        booking: newBooking,
      });
    } catch (error) {
      console.error('Error creating booking:', error);
      next(error);
    }
  },

  // Retrieve all bookings
  getAllBookings: async (req, res, next) => {
    try {
      const bookings = await Booking.find()
        .populate('deceased', 'firstName lastName deceasedNationalId')
        .populate('assignedStaff', 'name position')
        .sort({ createdAt: -1 });

      console.log('Bookings retrieved:', bookings);
      return res.json({ status: true, bookings });
    } catch (error) {
      console.error('Error retrieving bookings:', error);
      next(error);
    }
  },

  // Retrieve a booking by ID
  getBookingById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const booking = await Booking.findById(id)
        .populate('deceased', 'firstName lastName deceasedNationalId')
        .populate('assignedStaff', 'name position');

      if (!booking)
        return res
          .status(404)
          .json({ status: false, msg: 'Booking not found.' });

      console.log('Booking retrieved:', booking);
      return res.json({ status: true, booking });
    } catch (error) {
      console.error('Error retrieving booking by ID:', error);
      next(error);
    }
  },

  // Update a booking
  updateBooking: async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedBooking = await Booking.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });

      if (!updatedBooking)
        return res
          .status(404)
          .json({ status: false, msg: 'Booking not found.' });

      return res.json({
        status: true,
        msg: 'Booking updated successfully.',
        updatedBooking,
      });
    } catch (error) {
      console.error('Error updating booking:', error);
      next(error);
    }
  },

  // Delete a booking
  deleteBooking: async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedBooking = await Booking.findByIdAndDelete(id);

      if (!deletedBooking)
        return res
          .status(404)
          .json({ status: false, msg: 'Booking not found.' });

      return res.json({
        status: true,
        msg: 'Booking deleted successfully.',
      });
    } catch (error) {
      console.error('Error deleting booking:', error);
      next(error);
    }
  },
};
