const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
        },
        images: [
            {
                url: String,
                public_id: String,
            },
        ],
        discountPrice: {
            type: Number,
            required: true,
        },
        sellPrice: {
            type: Number,
            required: true,
        },
        stock: {
            type: Number,
            required: true,
            min: 0,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
