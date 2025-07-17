const express = require("express");
const router = express.Router();
const {
    submitContactForm,
    submitContactUsForm,
} = require("../controllers/contact.controller");

// Route: POST /api/contacts
router.post("/contacts", submitContactForm);
router.post("/contactUs", submitContactUsForm);

module.exports = router;
