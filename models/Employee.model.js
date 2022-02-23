const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  name: {
    type: String,
  },
  position: {
    type: String,
  },
  salary: {
    type: Number,
  },
});

module.exports = Employee = mongoose.model("Employee", EmployeeSchema);