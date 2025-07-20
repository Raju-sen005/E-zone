const mongoose = require('mongoose'); // ✅ Required line

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  date: {
    type: Date,
    default: Date.now, // ✅ Automatically sets date
  },
  image: String
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);