const userMunicipality = require("./userMunicipality.schema");

function getUsersMunicipality(){
    return userMunicipality.find()
};

function getUserById(id){
    return userMunicipality.findOne({_id: id});

};

async function getUserByReason(reason){
    return userMunicipality.find({reason: reason});
}

async function getUserByDepartment(department){
    return userMunicipality.find({department: department})
}

async function getUserByRut(rut){
    return userMunicipality.find({rut: rut})
}

async function createUser(user){
    return userMunicipality.create(user)
}

async function updaterUser(id, user){
    return userMunicipality.findOneAndUpdate({_id: id}, user,{new: true})
}

async function deleteUser(id){
    return userMunicipality.findByIdAndRemove({_id: id})
}

module.exports.getUsersMunicipality = getUsersMunicipality;
module.exports.getUserById = getUserById;
module.exports.getUserByReason = getUserByReason;
module.exports.getUserByDepartment = getUserByDepartment;
module.exports.getUserByRut = getUserByRut;
module.exports.createUser = createUser;
module.exports.updaterUser = updaterUser;
module.exports.deleteUser = deleteUser;