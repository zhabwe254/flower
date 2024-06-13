const express = require('express');
const router = express.Router();
const Customer = require('../models/customerModel');
const customerService = require('../services/customerService');

// Get all customers
router.get('/customers', async (req, res) => {
  try {
    const customers = await customerService.getAllCustomers();
    res.json(customers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve customers' });
  }
});

// Get a customer by ID
router.get('/customers/:id', async (req, res) => {
  try {
    const customer = await customerService.getCustomerById(req.params.id);
    if (!customer) {
      res.status(404).json({ message: 'Customer not found' });
    } else {
      res.json(customer);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve customer' });
  }
});

// Create a new customer
router.post('/customers', async (req, res) => {
  try {
    const customer = await customerService.createCustomer(req.body);
    res.json(customer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create customer' });
  }
});

// Update a customer
router.put('/customers/:id', async (req, res) => {
  try {
    const customer = await customerService.updateCustomer(req.params.id, req.body);
    if (!customer) {
      res.status(404).json({ message: 'Customer not found' });
    } else {
      res.json(customer);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update customer' });
  }
});

// Delete a customer
router.delete('/customers/:id', async (req, res) => {
  try {
    await customerService.deleteCustomer(req.params.id);
    res.json({ message: 'Customer deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete customer' });
  }
});

module.exports = router;
