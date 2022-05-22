const controller = require("./userMunicipality.controller")
const express = require('express')
const router = express.Router();
const middleware = require('../../middleware')


//mostrar usuarios

router.get('/mostrar/', async (req,res) =>{
    const  usuarios = await  controller.getUsersMunicipality();
    res.render("tabla_registro/tabla", {
        usuarios: usuarios
    });
});

router.get('/register/',(req, res) => {
    res.render("RegisterAct/register")
 });
 

router.get('/user/all', middleware.verifyTokenEmployee,async (req, res)=>{
    try {res.send((await (controller.getUsersMunicipality())));}
    catch(error){
        res.send(error.message,500)
    };
});

router.get('/user/reason/:reason',middleware.verifyTokenEmployee, async (req, res)=>{
    const reason = req.params["reason"];
    res.send(await controller.getUserByReason(reason));
    try {}catch(error){
        res.send(error.message,500)
    };
});

router.get('/user/id/:id',middleware.verifyTokenEmployee, async (req, res)=>{
    const id = req.params["id"];
    res.send(await controller.getUserById(id));
    try {}catch(error){
        res.send(error.message,500)
    };
});

router.get('/user/department/:department',middleware.verifyTokenEmployee, async (req, res)=>{
    const department = req.params["department"];
    try {res.send(await controller.getUserByDepartment(department))}
    catch(error){
        res.send(error.message,500)
    };
});

router.get('/user/rut/:rut',middleware.verifyTokenEmployee, async (req, res)=>{
    const rut = req.params["rut"];
    try {res.send(await controller.getUserByRut(rut))}
    catch(error){
        res.send(error.message,500)
    };
});


router.post('/user/create',middleware.verifyTokenEmployee, async (req, res)=>{
    console.log(req.body["reason"]);
    const user = req.body;
    console.log(user);
    try {res.send(await controller.createUser(user));
    }catch(error){
        res.send(error.message,500);
    };

    
});

router.patch('/user/:id',middleware.verifyTokenEmployee,async (req,res)=>{
    const id = req.params["id"];
    const user = req.body;
    try {res.send(await controller.updaterUser(id, user))}catch(error){
        res.send(error.message,500)
    };  
});



//borrar usuario
router.get('/user/:id',async (req,res)=>{
    const id = req.params["id"];
    try {
        await controller.deleteUser(id);
        res.redirect("/api/mostrar/");}

    catch(error){
        res.send(error.message,500);
    
    };  
});


module.exports =  router;