//import mongoose
const mongoose = require('mongoose')
//create schema
const productSchema = new mongoose.Schema({
p_id: Number,
p_name: String,
p_cost: Number,
p_category:String,
p_description:String,
p_img:String
})
module.exports = mongoose.model("Product", productSchema)