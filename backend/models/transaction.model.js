// models/Transaction.js
const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    merchantTransactionId: { type: String, required: true, unique: true },
    amount: Number,
    status: { type: String, default: 'PENDING' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Transaction', transactionSchema);
