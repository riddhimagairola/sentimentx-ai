const express = require("express");
const router = express.Router();

// POST /api/auth/login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and Password are required",
    });
  }

  res.status(200).json({
    success: true,
    message: "Login successful ✅",
    user: {
      id: 1,
      name: "Ri",
      email,
    },
  });
});

module.exports = router;