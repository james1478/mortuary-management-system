const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const adminStaffRoutes = require('./routes/adminStaffRoutes'); // Correct import
const deceasedRoutes = require('./routes/deceasedRoutes');
const staffRoutes = require('./routes/staffRoutes');
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
app.use('/api/admin', adminStaffRoutes); // Ensure adminStaffRoutes is valid middleware
app.use('/api/addDeceased', deceasedRoutes);
app.use('/api/addStaff', staffRoutes);
// Start Server
app.listen(port, '127.0.0.1', () => {
  console.log(`App running on port ${port}....`);
});
