const express = require("express");
const router = express.Router();
const Employee = require("../models/Data");

// GET api
router.get("/", (req, res) => {
  Employee.find({})
    .then(employees => {
      res.send(employees);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
module.exports = router;
