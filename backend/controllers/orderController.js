import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// placing orders using COD

const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// placing orders using STRIPE

const placeOrderStripe = async (req, res) => {};

// placing orders using RazorPay

const placeOrderRazorpay = async (req, res) => {};

// All Orders data for admin panel

const allOrders = async (req, res) => {};

// user Orders data for frontend

const userOrders = async (req, res) => {};

// update status from admin panel

const updateStatus = async (req, res) => {};

export {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
};
