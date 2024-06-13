const Customer = require('../models/customerModel');

const getAllCustomers = async () => {
  return await Customer.find();
};

const getCustomerById = async (id) => {
  return await Customer.findById(id);
};

const createCustomer = async (customerData) => {
  const customer = new Customer(customerData);
  return await customer.save();
};

const updateCustomer = async (id, customerData) => {
  return await Customer.findByIdAndUpdate(id, customerData, { new: true });
};

const deleteCustomer = async (id) => {
  await Customer.findByIdAndDelete(id);
};

module.exports = {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
