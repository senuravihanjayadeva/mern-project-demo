const Employee = require("../models/Employee.model");

const addEmployee = async (req, res) => {
  const { name, position, salary } = req.body;

  const employee = new Employee({
    name,
    position,
    salary,
  });

  await employee
    .save()
    .then((createdEmployee) => res.json(createdEmployee))
    .catch((error) => res.status(400).json("Error: " + error));
};

const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).send("Server Error" + error);
  }
};

const updateEmployee = async (req, res) => {
  Employee.findByIdAndUpdate(req.params.id)
    .then((existingEmployee) => {
      existingEmployee.name = req.body.name;
      existingEmployee.position = req.body.position;
      existingEmployee.salary = req.body.salary;
      existingEmployee
        .save()
        .then((updatedEmployee) => res.json(updatedEmployee))
        .catch((error) => res.status(400).json("Error: " + error));
    })
    .catch((error) => res.status(400).json("Error: " + error));
};

const deleteEmployee = async (req, res) => {
  Employee.findByIdAndDelete(req.params.id)
    .then((deletedEmployee) => {
      res.json(deletedEmployee);
    })
    .catch((error) => res.status(400).json("Error: " + error));
};

module.exports = {
  addEmployee,
  getEmployees,
  updateEmployee,
  deleteEmployee,
};
