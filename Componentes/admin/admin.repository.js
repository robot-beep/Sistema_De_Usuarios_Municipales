const adminSchema = require("./admin.schema");

//getter
function getAdmins(){
    return adminSchema.find()
};

function getRutAdmin(rut){
    return adminSchema.find({rut:rut})
}

function getEmailAdmin(email){
    return adminSchema.find({email:email})
}

function getPasswordAdmin(password){
    return adminSchema.find({password:password})
}

//setters
function createAdmin(admin){
    return adminSchema.create(admin)
}


module.exports.getAdmins = getAdmins;
module.exports.getRutAdmin = getRutAdmin;
module.exports.getEmailAdmin = getEmailAdmin;
module.exports.getPasswordAdmin = getPasswordAdmin;
module.exports.createAdmin = createAdmin;
