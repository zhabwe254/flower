const express = require('express');
const router = express.Router();
const Booking = require('../models/bookingModel');
const bookingService = require('../services/bookingService');

// Get all bookings
router.get('/bookings', async (req, res) => {
  try {
    const bookings = await bookingService.getAllBookings();
    res.json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve bookings' });
  }
});

// Get a booking by ID
router.get('/bookings/:id', async (req, res) => {
  try {
    const booking = await bookingService.getBookingById(req.params.id);
    if (!booking) {
      res.status(404).json({ message: 'Booking not found' });
    } else {
      res.json(booking);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve booking' });
  }
});

// Create a new booking
router.post('/bookings', async (req, res) => {
  try {
    const booking = await bookingService.createBooking(req.body);
    res.json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create booking' });
  }
});

// Update a booking
router.put('/bookings/:id', async (req, res) => {
  try {
    const booking = await bookingService.updateBooking(req.params.id, req.body);
    if (!booking) {
      res.status(404).json({ message: 'Booking not found' });
    } else {
      res.json(booking);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update booking' });
  }
});

// Delete a booking
router.delete('/bookings/:id', async (req, res) => {
  try {
    await bookingService.deleteBooking(req.params.id);
    res.json({ message: 'Booking deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete booking' });
  }
});

module.exports = router;
