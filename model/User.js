//import mongoose
const mongoose = require('mongoose')
//create schema
const userSchema = new mongoose.Schema({
u_id: Number,
u_name: String,
})
module.exports = mongoose.model("User", userSchema)