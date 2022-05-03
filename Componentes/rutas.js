var express = require('express');
var employee = require('./usuario/employee.network');
var admin = require('./admin/admin.network');


const rutas = [
    employee,
    admin
];

module.exports = rutas; 