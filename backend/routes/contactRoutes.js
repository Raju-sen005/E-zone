const express = require("express");
const router = express.Router();
const { submitContactForm, submitContactUsForm } = require("../controller/contactController");


// Route: POST /api/contacts
router.post("/contacts", submitContactForm);
router.post("/contactUs" ,submitContactUsForm )

module.exports = router;
