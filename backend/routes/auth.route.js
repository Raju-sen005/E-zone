const express = require("express");
const router = express.Router();
const { login, signup } = require("../controllers/auth.controller");

// ✅ POST /api/auth/register
router.post("/register", signup);


// ✅ POST /api/auth/login
router.post("/login", login);

module.exports = router;
