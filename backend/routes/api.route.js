const { Router } = require("express");
const authRoutes = require("./auth.route");
const orderRoutes = require("./order.route");
const productRoutes = require("./product.route");
const cartRoutes = require('./cart.route');
const wishlistRoutes = require('./wishlist.route');
const shippingRoutes = require('./shipping.route.js');

const router = Router();

router.use("/auth", authRoutes)
router.use('/products', productRoutes);
router.use("/order", orderRoutes);
router.use('/cart', cartRoutes);
router.use('/wishlist', wishlistRoutes);
router.use('/shipping', shippingRoutes);
module.exports = router;