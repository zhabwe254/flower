const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  customerName: String,
  serviceName: String,
  date: Date,
  time: String,
});

module.exports = mongoose.model('Booking', bookingSchema);
