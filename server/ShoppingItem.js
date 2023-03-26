const mongoose = require("mongoose")

const ShoppingItemSchema = new mongoose.Schema({
    item: String,
    amount: String
})

module.exports = mongoose.model("ShoppingItem", ShoppingItemSchema)