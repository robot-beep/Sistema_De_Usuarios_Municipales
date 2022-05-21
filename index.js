
var express = require('express')
const engine= require('ejs-mate');
var app = express();
var rutas = require('./Componentes/rutas');
const path = require('path');
const methodOverride = require('method-override');
const mongoose = require("mongoose")
const jwt = require('jsonwebtoken')
var bodyParser = require('body-parser');
const keyBD = "mongodb+srv://QueEquipo:Linces@type3cartagena.t9gnz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";





mongoose.connect(keyBD)
    .then(() => {
        console.log("DataBase Connected")
    }).catch(error => {
        console.log(error)
    });

//settings
app.set('views', path.join(__dirname, 'views')); //donde esta la carpeta views
app.engine('ejs',engine);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
 

//middleware 
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(express.json());
app.use('/api', rutas);


//configuracion
app.listen(3000, function (req, res) {
    console.log("escuchando al puerto 3000");
});
