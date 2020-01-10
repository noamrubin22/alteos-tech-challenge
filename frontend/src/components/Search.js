import React, { useState, useEffect } from "react";
import Employee from "./Employee";
import "./Search.css";
import axios from "axios";

const Search = props => {
  const [searchInput, setSearchInput] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [employees, setEmployees] = useState([]);

  /* data collection */
  useEffect(() => {
    axios
      .get("/api")
      .then(response => {
        setFiltered([...response.data]);
        setEmployees([...response.data]);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleChange = event => {
    setSearchInput(event.target.value);
  };

  /* checks match employees props and searchterm, updates state */
  useEffect(() => {
    let match = [];
    employees.forEach(employee => {
      if (
        employee.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        employee.age.toString().includes(searchInput) ||
        (employee.gender.includes(searchInput) &&
          employee.gender.indexOf(searchInput) === 0) ||
        employee.eyeColor.includes(searchInput.toLowerCase()) ||
        employee.company.toLowerCase().includes(searchInput.toLowerCase()) ||
        employee.email.includes(searchInput.toLowerCase()) ||
        employee.phone
          .replace(/[+()-\s]/g, "")
          .includes(searchInput.replace(/[+()-\s]/g, "")) ||
        employee.address
          .replace(/\s/g, "")
          .includes(searchInput.replace(/\s/g, ""))
      ) {
        match.push(employee);
        setFiltered(match);
      }
      setFiltered(match);
    });
  }, [searchInput, employees]);

  useEffect(() => {}, [filtered]);

  return (
    <div className="search">
      <form className="input-searchbar">
        <label htmlFor="search">Search: </label>
        <input
          className="input-field"
          type="text"
          name="search"
          value={searchInput}
          onChange={handleChange}
        />
      </form>
      <Employee data={filtered} />
    </div>
  );
};

export default Search;
