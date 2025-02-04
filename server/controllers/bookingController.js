const Booking = require('../models/bookingModel');
const Deceased = require('../models/deceasedModel');
const Staff = require('../models/staffModel');

module.exports = {
  // Add a new booking with automatic staff assignment and deceased validation
  addBooking: async (req, res, next) => {
    try {
      console.log('Received booking request:', req.body);
      const { date, serviceType, deceasedNationalId, notes } = req.body;

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

      let staffAssigned = [];

      // Automatically assign staff based on service type
      if (serviceType === 'Burial') {
        const mortician = await Staff.findOne({
          position: 'Mortician',
          available: true,
        });
        console.log('Mortician found:', mortician);

        const funeralPlanner = await Staff.findOne({
          position: 'Funeral Planner',
          available: true,
        });
        console.log('Funeral Planner found:', funeralPlanner);

        const securityGuard = await Staff.findOne({
          position: 'Security Guard',
          available: true,
        });
        console.log('Security Guard found:', securityGuard);

        if (mortician) staffAssigned.push(mortician._id);
        if (funeralPlanner) staffAssigned.push(funeralPlanner._id);
        if (securityGuard) staffAssigned.push(securityGuard._id);
      } else if (serviceType === 'Cremation') {
        const cremationOperator = await Staff.findOne({
          position: 'Crematorium Operator',
          available: true,
        });
        console.log('Crematorium Operator found:', cremationOperator);
        if (cremationOperator) staffAssigned.push(cremationOperator._id);
      } else if (serviceType === 'Memorial') {
        const funeralPlanner = await Staff.findOne({
          position: 'Funeral Planner',
          available: true,
        });
        console.log('Funeral Planner found (Memorial):', funeralPlanner);

        const securityGuard = await Staff.findOne({
          position: 'Security Guard',
          available: true,
        });
        console.log('Security Guard found (Memorial):', securityGuard);

        if (funeralPlanner) staffAssigned.push(funeralPlanner._id);
        if (securityGuard) staffAssigned.push(securityGuard._id);
      }

      console.log('Staff Assigned array:', staffAssigned);
      if (staffAssigned.length === 0) {
        return res.status(400).json({
          status: false,
          msg: 'No available staff for this service.',
        });
      }

      // Create the booking with the correct field name "staffAssigned"
      const newBooking = new Booking({
        date,
        serviceType,
        deceased: deceased._id, // Associate with deceased record
        staffAssigned,
        notes,
      });

      await newBooking.save();

      // Mark assigned staff as unavailable
      await Staff.updateMany(
        { _id: { $in: staffAssigned } },
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
        .populate('staffAssigned', 'fullName position')
        .sort({ createdAt: -1 });

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
        .populate('staffAssigned', 'fullName position');

      if (!booking)
        return res
          .status(404)
          .json({ status: false, msg: 'Booking not found.' });

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
