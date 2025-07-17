const Shipping = require('../models/shipping.model');

exports.getShipping = async (req, res) => {
  try {
    const shipping = await Shipping.findOne({ user: req.user._id });
    res.status(200).json({ success: true, shipping });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to fetch shipping info' });
  }
};

exports.saveShipping = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    company,
    country,
    city,
    postalCode,
    addressLine1,
    addressLine2,
  } = req.body;

  try {
    const updatedShipping = await Shipping.findOneAndUpdate(
      { userId: req.user._id },
      {
        userId: req.user._id,
        firstName,
        lastName,
        email,
        phone,
        company,
        country,
        city,
        postalCode,
        addressLine1,
        addressLine2,
      },
      {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true,
      }
    );

    res.status(200).json({ success: true, shipping: updatedShipping });
  } catch (err) {
    console.error('Shipping save error:', err);
    res.status(500).json({
      success: false,
      message: 'Failed to save shipping info',
    });
  }
};
