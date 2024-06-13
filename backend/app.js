require('dotenv').config();
const express = require('express');
const connectDB = require('./backend/db/database'); // Adjust path as necessary
const bookingRoutes = require('./backend/routes/bookingRoutes'); // Adjust path as necessary
const customerRoutes = require('./backend/routes/customerRoutes'); // Adjust path as necessary
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
