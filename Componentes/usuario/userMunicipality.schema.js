const {Schema, model} = require("mongoose");

const userMunicipalitySchema = new Schema({
    name: {type: String, required: true , trim: true},
    lastName: {type: String, required: true , trim: true},
    rut: {type: String, required: true , trim: true},
    email: {type: String, required: false , trim: true},
    address: {type: String, required: true , trim: true},
    department: {type: String, required: true , trim: true},
    mobileNumber: {type: Number, required: false , trim: true},
    phoneNumber: {type: Number, required: false , trim: true},
    reason: {type: String, required: true , trim: true},
    comment: {type: String, required: true , trim: true} 

})

module.exports = model("userMunicipality",userMunicipalitySchema)