const employee = require("./employee.schema");

function getEmployees(){
    return employee.find()
};

function getEmployeeById(id){
    return employee.findOne({_id: id});

};

async function getEmployeeByDepartment(department){
    return employee.find({department: department})
}

async function getEmployeeByRut(rut){
    return employee.find({rut: rut});
}

async function createEmployee(Employee){
    return employee.create(Employee);
}

async function updaterEmployee(id, Employee){
    return employee.findOneAndUpdate({_id: id}, Employee,{new: true})
}

async function deleteEmployee(id){
    return employee.findByIdAndRemove({_id: id})
}

module.exports.getEmployees = getEmployees;
module.exports.getEmployeeById = getEmployeeById;
module.exports.getEmployeeByDepartment = getEmployeeByDepartment;
module.exports.getEmployeeByRut = getEmployeeByRut;
module.exports.createEmployee = createEmployee;
module.exports.updaterEmployee = updaterEmployee;
module.exports.deleteEmployee = deleteEmployee;