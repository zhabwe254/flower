require('dotenv').config();
const express = require('express');
const connectDB = require('./db/database'); // Adjust path if necessary
const bookingRoutes = require('./routes/bookingRoutes'); // Adjust path if necessary
const customerRoutes = require('./routes/customerRoutes'); // Adjust path if necessary
const cors = require('cors');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/bookings', bookingRoutes);
app.use('/api/customers', customerRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
