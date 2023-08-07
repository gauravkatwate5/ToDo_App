const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  empname: { type: String },
  empcontact: { type: String },
  empemail: { type: String },
  addressline: { type: String },
  pincode: { type: String },
  city: { type: String },
  state: { type: String },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
