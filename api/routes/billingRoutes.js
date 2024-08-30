const {
  getAllBillingsController,
  createBillingController,
  deleteBillingController,
} = require("../controllers/billingController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = require("express").Router();

// get all billings by user id
router.get("/", authMiddleware, getAllBillingsController);

// create new billing
router.post("/", authMiddleware, createBillingController);

// delete billing
router.delete("/:id", authMiddleware, deleteBillingController);

module.exports = router;
