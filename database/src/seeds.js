const mongoose = require("mongoose");
const Employee = require("../../backend/models/Data");
const employees = require("./src/data.json.js.js.js");

const dbName = "alteos-project";
mongoose.connect(`mongodb://localhost/${dbName}`);

Employee.create(employees, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${employees.length} employees`);
  mongoose.connection.close();
});
