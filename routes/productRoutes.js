const express = require("express");

const router = express.Router();

const {
  getProducts,
  getProductById,
} = require("../controllers/productController");

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
// router.route("/").get(getProducts);
router.get("/", getProducts);

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
router.get("/:id", getProductById);

module.exports = router;
