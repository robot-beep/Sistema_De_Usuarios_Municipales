const {Schema, model} = require("mongoose");

const admin = new Schema({
    rut: {type: String, required: true , trim: true, unique: true},
    email: {type: String, required: true , trim: true, unique: true},
    password: {type: String, required: true, trim: true}
})

module.exports = model("admin",admin)