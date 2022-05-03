const express = require('express')
const router = express.Router();


router.get('/user/', (req, res)=>{

    res.send("funciona")
});
router.get('/user/add', (req, res)=>{
    res.send("funciona1")
});

module.exports =  router;