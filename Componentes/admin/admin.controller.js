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

async function login(rut, password){
    admin = await adminRepository.getRutAdmin(rut)
    if(admin == []){
        return "usuario o clave incorrecta";
    }else{
        if(admin[0].password == password){
            return "si";
        
        }else{
            return "usuario o clave incorrecta";
        }
    }

}

module.exports.getAdmins = getAdmins;
module.exports.createAdmin = createAdmin;
module.exports.getAdminByEmail = getAdminByEmail;
module.exports.getAdminByRut = getAdminByRut;
module.exports.login = login; 