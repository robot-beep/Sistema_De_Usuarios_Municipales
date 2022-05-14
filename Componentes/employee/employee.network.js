const express = require('express')
const router = express.Router();
const controller = require("./employee.controller")
const middleware = require('../../middleware')


router.post('/employee/signup',middleware.verifyToken, async (req, res) =>{
    const employee = req.body;
    await controller.createEmployee(employee);
   
})

router.get('/employee/all', middleware.verifyToken,async (req, res)=>{
    try {res.send((await (controller.getEmployees())));}
    catch(error){
        res.send(error.message,500)
    };
});


router.get('/employee/id/:id',middleware.verifyToken, async (req, res)=>{
    const id = req.params["id"];
    res.send(await controller.getEmployeeById(id));
    try {}catch(error){
        res.send(error.message,500)
    };
});

router.get('/employee/department/:department',middleware.verifyToken, async (req, res)=>{
    const department = req.params["department"];
    try {res.send(await controller.getEmployeeByDepartment(department))}
    catch(error){
        res.send(error.message,500)
    };
});

router.get('/employee/rut/:rut',middleware.verifyToken, async (req, res)=>{
    const rut = req.params["rut"];
    try {res.send(await controller.getEmployeeByRut(rut))}
    catch(error){
        res.send(error.message,500)
    };
});


router.patch('/employee/:id',middleware.verifyToken,async (req,res)=>{
    const id = req.params["id"];
    const employee = req.body;
    try {res.send(await controller.updaterEmployee(id, employee))}catch(error){
        res.send(error.message,500)
    };  
});



router.delete('/employee/:id',middleware.verifyToken,async (req,res)=>{
    const id = req.params["id"];
    try {res.send(await controller.deleteUser(id))}catch(error){
        res.send(error.message,500);
    };  
});




module.exports =  router;

