const orderModel = require('../models/orderModel');

//Create Order -/api/v1/order
exports.createOrder = async (req, res, nex) => {
    const cartItems = req.body;
    const amount = Number(cartItems.reduce((acc,item)=>(acc + item.product.price * item.qty),0)).toFixed(2);
    // console.log(amount, 'Amount')
    const status = 'pending';
    const order = await orderModel.create({ cartItems, amount, status })
    // console.log(reg, body,'Data');
    res.json(
        {
            success: true,
            // message:'Order Working!'
            order
        }
    )
}