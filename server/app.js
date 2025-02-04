const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const adminRoutes = require('./routes/adminRoutes'); // Correct import
const deceasedRoutes = require('./routes/deceasedRoutes');
const staffRoutes = require('./routes/staffRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('Connected Successfully to the MongoDB database');
  })
  .catch((error) => {
    console.log(error.message);
  });

// Routes
app.use('/api/admin', adminRoutes);
app.use('/api/addDeceased', deceasedRoutes);
app.use('/api/getDeceased', deceasedRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/booking', bookingRoutes);

// Start Server
app.listen(port, '127.0.0.1', () => {
  console.log(`App running on port ${port}....`);
});
