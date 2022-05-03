const repository = require("./userMunicipality.repository");

async function getUserByReason(Reason){
   return repository.getUserByReason(Reason);
}
function getUsersMunicipality(){
   return repository.getUsersMunicipality()
};

function getUserById(id){
   return repository.getUserById(id);

};

async function getUserByReason(reason){
   return repository.getUserByReason(reason);
}

async function getUserByDepartment(department){
   return repository.getUserByDepartment(department);
}

async function getUserByRut(rut){
   return repository.getUserByRut(rut);
}

async function createUser(user){
   return repository.createUser(user)
}

async function updaterUser(id, user){
   return repository.updaterUser(id, user)
}

module.exports.getUsersMunicipality = getUsersMunicipality;
module.exports.getUserById = getUserById;
module.exports.getUserByReason = getUserByReason;
module.exports.getUserByDepartment = getUserByDepartment;
module.exports.getUserByRut = getUserByRut;
module.exports.createUser = createUser;
module.exports.updaterUser = updaterUser;
