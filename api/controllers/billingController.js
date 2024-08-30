const Billing = require("../models/Billing");

// get all billings by user id controller
const getAllBillingsController = async (req, res) => {
  try {
    const { _id } = req.user || {};
    const billings = await Billing.find({ user: _id });
    res.status(200).json(billings);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

// create new billing controller
const createBillingController = async (req, res) => {
  try {
    const { _id } = req.user || {};
    const newBilling = new Billing({
      user: _id,
      ...req.body,
    });

    await newBilling.save();

    res.status(201).json(newBilling);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

// delete billing controller
const deleteBillingController = async (req, res) => {
  try {
    const { id } = req.params || {};
    const deletedBilling = await Billing.findByIdAndDelete(id);
    res.status(204).json(deletedBilling);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

module.exports = {
  getAllBillingsController,
  createBillingController,
  deleteBillingController,
};
