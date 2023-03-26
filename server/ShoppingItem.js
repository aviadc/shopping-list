const mongoose = require("mongoose")

const ShoppingItemSchema = new mongoose.Schema({
    item: String,
    amount: Number
})

module.exports = mongoose.model("ShoppingItem", ShoppingItemSchema)