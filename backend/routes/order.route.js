const express = require("express");
const router = express.Router();

const { createOrder, getPaymentStatus } = require("../controllers/order.controller");
const isAuth = require('../middlewares/auth.middleware');

router.post('/create-order', isAuth, createOrder);
router.post('/status', getPaymentStatus);

module.exports = router;