const express = require("express");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

const {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
} = require("../controllers/userController");

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
router.post("/", registerUser);

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
router.post("/login", authUser);

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
router.get("/profile", [protect], getUserProfile);

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
router.put("/profile", [protect], updateUserProfile);

module.exports = router;
