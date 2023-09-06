import { ProductModel } from "../models/ProductModel.js";

export const getProducts = async (req, res) => {
    try {
        const products = await ProductModel.find();
        res.status(200).json(products);        
    } catch (err) {
        res.status(500).json({ error: err});
    }
};

export const getProductsByCategory = async (req, res) => {
    try {
        const category = req.params.category;
        const products = await ProductModel.find({category: category});
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ error: err});
    }
};

export const getProductsByPrice = async (req, res) => {
    try {
        const minPrice = req.query.minPrice;
        const maxPrice = req.query.maxPrice;

        if(!minPrice || !maxPrice) {
            return res.status(400).json({ error: "minPrice and maxPrice are required." });
        }

        const products = await ProductModel.find({
            price: {$gte: minPrice, $lte: maxPrice}
        })

        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ error: err});
    }
};

export const getProductsByBrands = async (req, res) => {
    try {
        const brand = req.params.brand;
        const products = await ProductModel.find({ brand: brand });
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({error: err});
    }
};

export const createProduct = async (req, res) => {
    try {
        const newProduct = req.body;
        const product = new ProductModel(newProduct);
        await product.save();

        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({error: err});
    }
};

export const editProduct = async (req, res) => {
    
};

export const updateProduct = async (req, res) => {
    try {
        const updateProduct = req.body;
        const product = await ProductModel.findOneAndUpdate({_id: updateProduct._id}, updateProduct, {new: true});
        res.ststus(200).json(product);
    } catch (err) {
        res.status(500).json({error: err});
    }
};
