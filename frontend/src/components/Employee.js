import React from "react";
import "./Employee.css";

const Employee = props => {
  return (
    <div>
      {props.data.map(employee => {
        return (
          <div className="display-employee" key={employee._id}>
            <h3>{employee.name}</h3>
            <h4>Age: {employee.age}</h4>
            <h4>Eye color: {employee.eyeColor}</h4>
            <h4>Gender: {employee.gender}</h4>
            <h4>Company: {employee.company}</h4>
            <h4>Email: {employee.email}</h4>
            <h4>Phone: {employee.phone}</h4>
            <h4>Address: {employee.address}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Employee;
