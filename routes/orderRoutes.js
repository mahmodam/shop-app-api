const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

const {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
} = require("../controllers/orderController");

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
router.post("/", [protect], addOrderItems);

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
router.get("/:id", [protect], getOrderById);

// @desc    Update order to paid
// @route   GET /api/orders/:id/pay
// @access  Private
router.put("/:id/pay", [protect], updateOrderToPaid);

module.exports = router;
