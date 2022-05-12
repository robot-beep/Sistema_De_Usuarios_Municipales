const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const adminRepository = require('./admin.repository')


async function getAdmins (){
    return await adminRepository.getAdmin()
}

async function getAdminByEmail(email){
    return await adminRepository.getEmailAdmin(email)
}

async function getAdminByRut(rut){
    return await adminRepository.getRutAdmin(rut)
}

async function createAdmin(admin){
    //return await adminRepository.getEmailAdmin(email)
    return await adminRepository.createAdmin(admin)
}

module.exports.getAdmins = getAdmins;
module.exports.createAdmin = createAdmin;
module.exports.getAdminByEmail = getAdminByEmail;
module.exports.getAdminByRut = getAdminByRut;