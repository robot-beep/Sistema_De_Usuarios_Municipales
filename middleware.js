const jwt = require('jsonwebtoken');
const express = require('express');


//verificación de tokens 
async function verifyToken(req, res, next) {
    let headers = await req.headers.cookie
    let token = headers.split("=")
    console.log("middleware /n")
    console.log(token[1])
    if (token[1] == null) return res.sendStatus(403);
    jwt.verify(token[1], "secret_key", (err, user) => {
        if (err) return res.sendStatus(404);
        req.user = user;
        next();
    });
}

async function verifyTokenEmployee(req, res, next) {
    let headers = await req.headers.cookie
    let token = headers.split("=")
    console.log("middleware /n")
    console.log(token[1])
    if (token[1] == null) return res.sendStatus(403);
    jwt.verify(token[1], "secret_key_employee", (err, user) => {
        if (err) return res.sendStatus(404);
        req.user = user;
        next();
    });
}


module.exports.verifyToken = verifyToken;
module.exports.verifyTokenEmployee = verifyTokenEmployee;


