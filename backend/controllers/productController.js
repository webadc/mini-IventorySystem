const ProductModel = require('../models/productModel');

exports.getProducts = async(req, res, nex) => {

    const products = await ProductModel.find({});


    res.json({
        success: true,
        message:'Get Products Working!'
    })
}
exports.getSingleProducts = (req,res,nex) => {
    res.json({
        success: true,
        message:'Get Single Products Working!'
    })
}