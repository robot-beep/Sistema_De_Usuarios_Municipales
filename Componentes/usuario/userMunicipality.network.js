const controller = require("./userMunicipality.controller")
const express = require('express')
const router = express.Router();
const middleware = require('../../middleware')




router.get('/user/all', middleware.verifyToken,async (req, res)=>{
    try {res.send((await (controller.getUsersMunicipality())));}
    catch(error){
        res.send(error.message,500)
    };
});

router.get('/user/reason/:reason',middleware.verifyToken, async (req, res)=>{
    const reason = req.params["reason"];
    res.send(await controller.getUserByReason(reason));
    try {}catch(error){
        res.send(error.message,500)
    };
});

router.get('/user/id/:id',middleware.verifyToken, async (req, res)=>{
    const id = req.params["id"];
    res.send(await controller.getUserById(id));
    try {}catch(error){
        res.send(error.message,500)
    };
});

router.get('/user/department/:department',middleware.verifyToken, async (req, res)=>{
    const department = req.params["department"];
    try {res.send(await controller.getUserByDepartment(department))}
    catch(error){
        res.send(error.message,500)
    };
});

router.get('/user/rut/:rut',middleware.verifyToken, async (req, res)=>{
    const rut = req.params["rut"];
    try {res.send(await controller.getUserByRut(rut))}
    catch(error){
        res.send(error.message,500)
    };
});


router.post('/user/create',middleware.verifyToken, async (req, res)=>{
    console.log(req.body["reason"]);
    const user = req.body;
    console.log(user);
    try {res.send(await controller.createUser(user));
    }catch(error){
        res.send(error.message,500);
    };

    
});

router.patch('/user/:id',middleware.verifyToken,async (req,res)=>{
    const id = req.params["id"];
    const user = req.body;
    try {res.send(await controller.updaterUser(id, user))}catch(error){
        res.send(error.message,500)
    };  
});



router.delete('/user/:id',middleware.verifyToken,async (req,res)=>{
    const id = req.params["id"];
    try {res.send(await controller.deleteUser(id))}catch(error){
        res.send(error.message,500);
    };  
});


module.exports =  router;