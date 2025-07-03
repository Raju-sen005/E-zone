
const Contact = require("../models/Contact");
const ContactUs = require("../models/ContactUs")

exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

      console.log("Received Contact:", { name, email, phone, message });


    if (!name || !email || !phone || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    await Contact.create({ name, email, phone, message });

    res.status(201).json({ message: "Message submitted successfully." });
  } catch (error) {
    console.error("Contact error:", error.message);
    res.status(500).json({ message: "Something went wrong." });
  }
};


exports.submitContactUsForm = async (req, res) => {
  try {
    const { name, email,subject , phone, message } = req.body;

      console.log("Received Contact:", { name, email,subject, phone, message });


    if (!name || !email || !subject || !phone || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    await ContactUs.create({ name, email,subject, phone, message });

    res.status(201).json({ message: "Message submitted successfully." });
  } catch (error) {
    console.error("Contact error:", error.message);
    res.status(500).json({ message: "Something went wrong." });
  }
};


