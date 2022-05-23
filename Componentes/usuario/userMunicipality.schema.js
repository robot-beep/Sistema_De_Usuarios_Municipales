const {Schema, model} = require("mongoose");

const userMunicipalitySchema = new Schema({
    name: {type: String, required: true , trim: true},
    lastName: {type: String, required: true , trim: true},
    rut: {type: String, required: true , trim: true},
    email: {type: String, required: false , trim: true},
    calle: {type: String, required: false , trim: true},
    department: {type: String, required: true , trim: true},
    mobileNumber: {type: Number, required: false , trim: true},
    //phoneNumber: {type: Number, required: false , trim: true},
    reason: {type: String, required: true , trim: true},
    comuna: { type: String, required: true, trim: true },
    comment: { type: String, required: false, trim: true },
    region: { type: String, required: true, trim: true },
    address: { type: String, required: false, trim: true }
   

})

module.exports = model("userMunicipality",userMunicipalitySchema)