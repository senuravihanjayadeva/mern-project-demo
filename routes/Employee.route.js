const express = require("express");
const router = express.Router();
const {
    addEmployee,
    getEmployees,
    updateEmployee,
    deleteEmployee,
} = require("../controllers/Employee.controller");

//@route  GET api/employee/all
//@desc   get all employees
//@access Public
router.get("/all", getEmployees);

//@route  POST api/employee
//@desc   add employee
//@access Public
router.post("/", addEmployee);

//@route  PUT api/employee
//@desc   update employee
//@access Public
router.put("/", updateEmployee);

//@route  DELETE api/employee
//@desc   delete employee
//@access Public
router.delete("/:id", deleteEmployee);

module.exports = router;