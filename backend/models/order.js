const mongoose = require("mongoose");

const order = new mongoose.Schema({
    //we are not creating an array because we need only one user object
    user:{
      type: mongoose.Types.ObjectId,
      ref: "user"
    },
    book: {
        type: mongoose.Types.ObjectId,
        ref: "books",
    },
    status: {
        type: String,
        default: "Order Placed",
        enum: ["Order Placed", "Out for delivery, Delivered, Cancelled"]
    },
}, 
{timestamps: true}
);

module.exports = mongoose.model("order", order)