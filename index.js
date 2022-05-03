
var express = require('express')
var app = express();
var rutas = require('./Componentes/rutas');

const mongoose = require("mongoose")
const jwt = require('jsonwebtoken')
const keyBD = "mongodb+srv://QueEquipo:Linces@type3cartagena.t9gnz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


mongoose.connect(keyBD)
    .then(() => {
        console.log("DataBase Connected")
    }).catch(error => {
        console.log(error)
    });

//middleware 

//token verification

app.use(express.json());

app.use('/api', rutas);

app.listen(3000, function (req, res) {
    console.log("escuchando al puerto 3000");
});






