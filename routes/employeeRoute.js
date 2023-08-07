const express = require("express");
const route = express.Router();

let EmpModel = require("../models/employeeModel");

route.get("/getallemp", async (request, response) => {
  const employees = await EmpModel.find({});
  try {
    response.send(employees);
  } catch (err) {
    response.status(500).send(err);
  }
});

route.get("/getemp/:id", async (request, response) => {
  const Employee = await EmpModel.findById(request.params.id);
  try {
    console.log(Employee);
    response.send(Employee);
  } catch (error) {
    response.status(500).send(err);
  }
});

route.post("/addemp", async (request, response) => {
  const Employees = new EmpModel(request.body);
  try {
    await Employees.save();
    response.send(Employees);
  } catch (error) {
    response.status(500).send(error);
  }
});

//update data in database
route.put("/updateemp/:id", async (request, response) => {
  const Employee = await EmpModel.findById(request.params.id);
  try {
    Employee.set({
      empname: request.body.empname,
      empcontact: request.body.empcontact,
      empemail: request.body.empemail,
      addressline: request.body.addressline,
      pincode: request.body.pincode,
      city: request.body.city,
      state: request.body.state,
    });
    const res = await Employee.save();
    response.send(res);
  } catch (error) {
    response.status(500).send("failuer");
  }
});

//delete data in to database
route.delete("/deleteemp/:id", async (request, response) => {
  try {
    const Employee = await EmpModel.findByIdAndDelete(request.params.id);
    if (!Employee) {
      response.status(404).send("There is no such student");
    } else {
      response.send(Employee);
    }
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = route;
