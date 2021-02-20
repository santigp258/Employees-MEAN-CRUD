const Employee = require("../models/employee");
const employeeCtrl = {};

employeeCtrl.getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};

employeeCtrl.createEmployee = async (req, res) => {
  const employee = new Employee(req.body);
  await employee.save();
  res.json({
    status: true,
    msg: "Employeed save",
  });
};

employeeCtrl.getEmployee = async (req, res) => {
  const { id } = req.params;
  const employee = await Employee.findById(id);
  res.json(employee);
};

employeeCtrl.editEmployee = async (req, res) => {
  const { id } = req.params;
  const employee = {
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary,
  }
   await Employee.findOneAndUpdate(id, {$set: employee}, {new: true}); //si el dato no existe, crear nuevo
  res.json({
    status: true,
    response: employee,
  });

  console.log(req.body);
};

employeeCtrl.deleteEmployee = async (req, res) => {
    const {id} = req.params
    const employee = await Employee.findByIdAndRemove(id);
    res.json({
        status:  true,
        response: employee
    })
};

module.exports = employeeCtrl;
