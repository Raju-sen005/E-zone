const { default: mongoose } = require('mongoose');
const Cart = require('../models/cart.model');
const productModel = require('../models/product.model');

exports.getCart = async (req, res) => {
  const userId = req.user.id;
  try {
    const cart = await Cart.findOne({ userId }).populate('items.productId');
    res.status(200).json({ success: true, cart });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to fetch cart' });
  }
};

exports.addToCart = async (req, res) => {
  const userId = req.user.id;
  const { productId, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [{ productId, quantity }] });
    } else {
      const index = cart.items.findIndex(item =>
        item.productId.toString() === productId
      );

      if (index > -1) {
        cart.items[index].quantity += quantity;
      } else {
        cart.items.push({ productId, quantity });
      }
    }

    // Fetch all product details (prices) to calculate totalAmount
    const populatedCart = await cart.populate('items.productId');

    const totalAmount = populatedCart.items.reduce((acc, item) => {
      const price = item.productId?.sellPrice || 0;
      const qty = item.quantity || 0;
      return acc + price * qty;
    }, 0);

    cart.totalAmount = totalAmount;

    await cart.save();

    // Optionally populate again before sending
    const finalCart = await Cart.findOne({ userId }).populate('items.productId');

    res.status(200).json({ success: true, cart: finalCart });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to add to cart' });
  }
};

exports.removeFromCart = async (req, res) => {
  const userId = req.user.id;
  const { itemId } = req.params;

  try {
    const objectId = new mongoose.Types.ObjectId(itemId);

    const existingCart = await Cart.findOne({ userId });
    if (!existingCart) {
      return res.status(404).json({ success: false, message: "Cart not found" });
    }

    const itemExists = existingCart.items.find(item => item._id.toString() === itemId);
    if (!itemExists) {
      return res.status(404).json({ success: false, message: "Item not found in cart" });
    }

    const cart = await Cart.findOneAndUpdate(
      { userId },
      { $pull: { items: { _id: objectId } } },
      { new: true }
    );

    res.status(200).json({ success: true, cart });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Failed to remove item' });
  }
};

