const mongoose = require("mongoose");

const book = new mongoose.Schema({
    //we are not creating an array because we need only one user object
    url:{
      type: String,
      required: true
    },
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    desc: {
        type: Number,
        required: true,
    },
    language: {
        type: Number,
        required: true,
    },
}, 
{timestamps: true}
);

module.exports = mongoose.model("books", book)