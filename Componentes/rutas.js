var express = require('express');
var employee = require('./employee/employee.network');
var admin = require('./admin/admin.network');
var user = require('./usuario/usuario.network')


const rutas = [
    employee,
    admin, 
    user
];

module.exports = rutas; 