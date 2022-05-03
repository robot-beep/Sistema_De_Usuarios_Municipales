 
const express = require('express');
const router = express.Router();
var controller = require('./admin.controller');
const middleware = require('../../middleware');
const jwt = require('jsonwebtoken');


router.get('/admin/', middleware.verifyToken, (req, res)=>{
    res.send("funciona")
});

router.get('/admin/prueba', (req, res)=>{
   console.log(req.headers["authorization"]);
})

router.post('/admin/signup' , (req,res) => {
    const id  = req.body.id;
    const username = req.body.username;
    const password = req.body.password;
    jwt.sign(id , 'secret_key' , (err,token) => {
        if(err){
           res.status(400).send({msg : 'Error'})
        }
   else {
           res.send({msg:'success' , token: token})
        }
     })
  })
    



module.exports =  router;