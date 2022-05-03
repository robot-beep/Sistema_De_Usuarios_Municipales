const controller = require("./usuarioMunicipality.controller")
const express = require('express')
const router = express.Router();
const middleware = require('../../middleware')




router.get('/user/all', middleware.verifyToken,async (req, res)=>{
    //res.send("funciona")
    //console.log(await (controller.getUserByReason("Rotura de matriz en la calle falsa 123")));
    res.send((await (controller.getUsersMunicipality())));
});

router.get('/user/reason/:reason',middleware.verifyToken, async (req, res)=>{
    const reason = req.params["reason"];
    res.send(await controller.getUserByReason(reason));
});

router.get('/user/id/:id',middleware.verifyToken, async (req, res)=>{
    const id = req.params["id"];
    res.send(await controller.getUserById(id));
});

router.get('/user/department/:department',middleware.verifyToken, async (req, res)=>{
    const department = req.params["department"];
    res.send(await controller.getUserByDepartment(department));
});

router.get('/user/rut/:rut',middleware.verifyToken, async (req, res)=>{
    const rut = req.params["rut"];
    res.send(await controller.getUserByRut(rut));
});


router.post('/user/create',middleware.verifyToken, async (req, res)=>{
    console.log(req.body["reason"]);
    const user = req.body;
    console.log(user);
    res.send(await controller.createUser(user));
    
});

router.patch('/user/:id',middleware.verifyToken,async (req,res)=>{
    const id = req.params["id"];
    const user = req.body;
    res.send(await controller.updaterUser(id, user))

});

module.exports =  router;