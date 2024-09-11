const ProductModel = require('../models/productModel');

//Get Products API - /api/v1/products
exports.getProducts = async(req, res, nex) => {
    const products = await ProductModel.find({});
    res.json({
        success: true,
        products
        // message:'Get Products Working!'
    })
}
//Get SingleProduct API - /api/v1/product/:id
exports.getSingleProducts = async (req, res, nex) => {
    console.log(req.params.id,'ID')
    
    try {
        const product = await ProductModel.findById(req.params.id);
        res.json({
            success: true,
            product
            // message:'Get Single Products Working!'
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            // message: message.error
            message:'unable ro get product'
        })
    }
  
   
}