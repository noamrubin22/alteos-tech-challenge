const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");

/* GET home page */
router.get("/", (req, res, next) => {
  // Employee.find({})
  //   .then(employees => {
  //     // console.log("EMPOL", employees);
  //     console.log("eeeemmyyyy", employees);
  //     res.json(employees);
  //   })
  //   .catch(err => {
  //     res.status(500).json(err);
  //   });
});

// substract data from backend and send to front
// router.post("/", (req, res) => {
//   Employee.find({})
//     .then(employees => {
//       console.log("EMPLLL", employees);
//       res.json(employees);
//     })
//     .catch(err => console.log(err));
// });

module.exports = router;
