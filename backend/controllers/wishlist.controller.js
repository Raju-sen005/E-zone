const Wishlist = require('../models/wishlist.model');

exports.getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({ userId: req.user.id }).populate('items');
    res.status(200).json({ success: true, wishlist });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to fetch wishlist' });
  }
};

exports.addToWishlist = async (req, res) => {
  const { productId } = req.body;
  const userId = req.user.id;

  try {
    let wishlist = await Wishlist.findOne({ userId });

    if (!wishlist) {
      wishlist = new Wishlist({ userId, items: [productId] });
    } else if (!wishlist.items.includes(productId)) {
      wishlist.items.push(productId);
    }

    await wishlist.save();
    res.status(200).json({ success: true, wishlist });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to add to wishlist' });
  }
};

exports.removeFromWishlist = async (req, res) => {
  const { productId } = req.params;
  const userId = req.user.id;

  try {
    const wishlist = await Wishlist.findOneAndUpdate(
      { userId },
      { $pull: { items: productId } },
      { new: true }
    );

    res.status(200).json({ success: true, wishlist });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to remove from wishlist' });
  }
};
