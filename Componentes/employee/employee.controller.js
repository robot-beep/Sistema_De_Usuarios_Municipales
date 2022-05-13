const repository = require('./employee.repository');


 function getEmployees(){
    return repository.getEmployees();
 };
 
 function getEmployeeById(id){
    return repository.getEmployeeById(id);
 };
 
 async function getEmployeeByDepartment(department){
    return repository.getEmployeeByDepartment(department);
 }
 
 async function getEmployeeByRut(rut){
    return repository.getEmployeeByRut(rut);
 }
 
 async function createEmployee(employee){
    return repository.createEmployee(employee);
 }
 
 async function updaterEmployee(id, employee){
    return repository.updaterEmployee(id, employee);
 }
 
 async function deleteEmployee(id){
    return repository.deleteEmployee(id);
 }
 
 module.exports.getEmployees = getEmployees;
 module.exports.getEmployeeById = getEmployeeById;
 module.exports.getEmployeeByDepartment = getEmployeeByDepartment;
 module.exports.getEmployeeByRut = getEmployeeByRut;
 module.exports.createEmployee = createEmployee;
 module.exports.updaterEmployee = updaterEmployee;
 module.exports.deleteEmployee = deleteEmployee;
 