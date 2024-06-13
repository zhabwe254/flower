const Booking = require('../models/bookingModel');

const getAllBookings = async () => {
  return await Booking.find();
};

const getBookingById = async (id) => {
  return await Booking.findById(id);
};

const createBooking = async (bookingData) => {
  const booking = new Booking(bookingData);
  return await booking.save();
};

const updateBooking = async (id, bookingData) => {
  return await Booking.findByIdAndUpdate(id, bookingData, { new: true });
};

const deleteBooking = async (id) => {
  await Booking.findByIdAndDelete(id);
};

module.exports = {
  getAllBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking,
};
