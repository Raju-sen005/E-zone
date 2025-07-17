const express = require('express');
const router = express.Router();
const {
    getAllProducts,
    getProductById
} = require('../controllers/product.controller');

// Route: GET /api/products
router.get('/', getAllProducts);

// Route: GET /api/products/:id
router.get('/:id', getProductById);

module.exports = router;
