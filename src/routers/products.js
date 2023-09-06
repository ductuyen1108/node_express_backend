import express from 'express';
import { getProducts, getProductsByBrands, getProductsByCategory, getProductsByPrice } from '../controllers/products.js';

const router = express.Router();

router.get('/category/:category', getProductsByCategory);
router.get('/brand/:brand', getProductsByBrands);
router.get('/price', getProductsByPrice);
router.get('/', getProducts);

export default router;

