const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    description: String,
    price: Number,
    imageSrc: String
});

module.exports = mongoose.model('Item', itemSchema, "items");