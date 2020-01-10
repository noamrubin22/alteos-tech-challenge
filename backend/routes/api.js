const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");

// GET api
router.get("/", (req, res) => {
  Employee.find({})
    .then(employees => {
      console.log(employees);
      res.send(employees);
    })
    .catch(err => {
      res.status(500).json(err);
      console.log(err);
    });
});
module.exports = router;
