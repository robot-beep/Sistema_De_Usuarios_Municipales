const {Schema, model} = require("mongoose");

const employeeSchema = new Schema({
    name: {type: String, required: true , trim: true},
    lastName: {type: String, required: true , trim: true},
    rut: {type: String, required: true , trim: true},
    email: {type: String, required: true , trim: true},
    password: {type: String, required: true , trim: true}
})

module.exports = model("employee",employeeSchema);