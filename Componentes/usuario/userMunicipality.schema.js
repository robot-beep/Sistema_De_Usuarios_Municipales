const {Schema, model} = require("mongoose");

new Schema({
    name: {String, required: true , trim: true},
    rut: {String, required: true , trim: true},
    email: String,
    address: String,
    department: String,
    mobileNumber: Number,
    phoneNumber: Number,
    reason: String




})