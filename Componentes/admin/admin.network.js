
const express = require('express');
const router = express.Router();
var controller = require('./admin.controller');
const middleware = require('../../middleware');
const jwt = require('jsonwebtoken');



router.get('/admin/', (req, res) => {

   res.render("iniciar-sesion/signin")
});

router.get('/admin/1', (req, res) => {

   res.render("RegisterAct/register")
});



router.post('/admin/prueba', async (req, res) => {
   var email = req.body.email;
   var admin = await controller.getAdminByEmail(email)
   res.send(email);
   if (admin == ""){
      console.log("admin era null")
   }
   
})

//registrarse 
router.post('/admin/signup', async (req, res) => {
   const admin = req.body;
   const rut = req.body.rut;
   const email = req.body.email;
   const password = req.body.password;

   //primero reviso si es que existe algun usuario con el mismo email 
   var testEmail = await controller.getAdminByEmail(email);
   var testRut = await controller.getAdminByRut(rut);

   if((testEmail == "") && (testRut == "")){
      console.log(await controller.createAdmin(admin));

      jwt.sign(rut, 'secret_key', (err, token) => {
         if (err) {
            res.status(400).send({ msg: 'Error' })
         }
         else {
            res.send({ msg: 'success', token: token })
         }
      })

   }else{
      res.send("el usuario ya existe")
   }   
})

//inicio de sesión 

//cierre de sesión 



module.exports = router;