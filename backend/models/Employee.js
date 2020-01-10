const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  _id: String,
  age: Number,
  eyeColor: String,
  name: String,
  gender: String,
  company: String,
  email: String,
  phone: String,
  address: String
});

const Employee = mongoose.model("User", employeeSchema);
module.exports = Employee;
