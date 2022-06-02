const express = require('express')
const router = express.Router();
const controller = require("./employee.controller")
const middleware = require('../../middleware')
const jwt = require('jsonwebtoken');


router.get('/employee/iniciar', (req, res) => {
    res.render("iniciar-sesion/signinuser")
 
 });


router.get('/dummy', middleware.verifyTokenEmployee, async (req, res) => {
    console.log("lo haz logrado")
})

router.post('/employee/signup', middleware.verifyTokenEmployee, async (req, res) => {
    const employee = req.body;
    await controller.createEmployee(employee);

})

router.get('/employee/all', middleware.verifyTokenEmployee, async (req, res) => {
    try { res.send((await (controller.getEmployees()))); }
    catch (error) {
        res.send(error.message, 500)
    };
});


router.get('/employee/id/:id', middleware.verifyTokenEmployee, async (req, res) => {
    const id = req.params["id"];
    res.send(await controller.getEmployeeById(id));
    try { } catch (error) {
        res.send(error.message, 500)
    };
});

router.get('/employee/department/:department', middleware.verifyTokenEmployee, async (req, res) => {
    const department = req.params["department"];
    try { res.send(await controller.getEmployeeByDepartment(department)) }
    catch (error) {
        res.send(error.message, 500)
    };
});

router.get('/employee/rut/:rut', middleware.verifyTokenEmployee, async (req, res) => {
    const rut = req.params["rut"];
    try { res.send(await controller.getEmployeeByRut(rut)) }
    catch (error) {
        res.send(error.message, 500)
    };
});


router.patch('/employee/:id', middleware.verifyTokenEmployee, async (req, res) => {
    const id = req.params["id"];
    const employee = req.body;
    try { res.send(await controller.updaterEmployee(id, employee)) } catch (error) {
        res.send(error.message, 500)
    };
});



router.delete('/employee/:id', middleware.verifyTokenEmployee, async (req, res) => {
    const id = req.params["id"];
    try { res.send(await controller.deleteUser(id)) } catch (error) {
        res.send(error.message, 500);
    };
});

//sesion

router.post('/employee/signup', async (req, res) => {
    const employee = req.body;
    const rut = req.body.rut;
    const email = req.body.email;
    const password = req.body.password;

    //primero reviso si es que existe algun usuario con el mismo email 
    var testEmail = await controller.getAdminByEmail(email);
    var testRut = await controller.getAdminByRut(rut);

    if ((testEmail == "") && (testRut == "")) {
        console.log(await controller.createAdmin(employee));

        jwt.sign(rut, 'secret_key_employee', (err, token) => {
            if (err) {
                res.cookie('token', token, { maxAge: 60000 * 240 });
                res.status(400).send({ msg: 'Error' })
            }
            else {
                res.send({ msg: 'success', token: token })
            }
        })

    } else {
        res.send("el usuario ya existe")
    }
})


//inicio de sesión 

router.post('/employee/login/', async (req, res) => {
    const rut = req.body.rut;
    const password = req.body.password;
    let permiso = await controller.login(rut, password);
    console.log(req.body)


    if (permiso == "si") {

        jwt.sign(rut, 'secret_key_employee', (err, token) => {
            if (err) {
                res.status(400).send({ msg: 'Error' })
            }
            else {
                res.cookie("token", token, {
                    maxAge: 900000 * 90000,
                    secure: true,
                    httpOnly: false
                })
                res.render("RegisterAct/register")


            }
        })

    } else {
        res.send("el usuario no existe")
    }
});

//cerrar sesion

router.post("/employee/logout", middleware.verifyTokenEmployee, async (req, res) => {

    const authHeader = await req.headers["token"];
    jwt.sign(authHeader, "token", { expiresIn: 1 }, (logout, err) => {
        if (logout) {
            res.cookie('token', "token", { maxAge: 1 });
            res.send('Has sido desconectado');
        } else {
            res.send('Error');
        }
    });
});





module.exports = router;

