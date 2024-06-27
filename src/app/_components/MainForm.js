'use client';

import React, { useState, useEffect } from "react";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from "@mui/material";
import Image from "next/image";

const MainForm = () => {
  const initialFormData = {
    job_title: "",
    zip_code: "",
    gender: "",
    income_year: ""
  };

  const [formData, setFormData] = useState(initialFormData);
  const [jobOptions, setJobOptions] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);

  useEffect(() => {
    fetch('./data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const sortedJobs = data.sort((a, b) => a.job_title.localeCompare(b.job_title));
        setJobOptions(sortedJobs);
        setFilteredOptions(sortedJobs);
      })
      .catch((error) => {
        console.error("Error fetching job data:", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleReset = (e) => {
    e.preventDefault();
    setFormData(  );
    setFilteredOptions(jobOptions);
  };

  const handleAutocompleteChange = (event, newValue) => {
    setFormData({ ...formData, job_title: newValue });
  };

  const handleInputChange = (event, value) => {
    const filtered = jobOptions.filter(option =>
      option.job_title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const preventMinus = (e) => {
    if (e.code === 'Minus') {
        e.preventDefault();
    }
};


  return (
    <Box className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="formImg">
          <Image src="/scale2.gif" height="150" width="150" alt="Scale" />
        </div>
        <label htmlFor="job_title" className="label">
          JOB NAME
        </label>
        <Autocomplete
          freeSolo
          id="job_title"
          options={filteredOptions.map((option) => option.job_title)}
          value={formData.job_title}
          onChange={handleAutocompleteChange}
          onInputChange={handleInputChange}
          renderInput={(params) => (
            <TextField
              {...params}
              name="job_title"
              variant="outlined"
              placeholder="Laborer"
              className="input"
              onChange={handleChange}
            />
          )}
        />

        <label htmlFor="zip_code" className="label">
          ZIP CODE
        </label>
        <TextField
          required
          id="zip_code"
          name="zip_code"
          placeholder="Zip Code"
          value={formData.zip_code}
          onChange={handleChange}
          className="input"
          variant="outlined"
        />

        {/* <label htmlFor="gender" className="label">
          GENDER
        </label> */}
        <Box sx={{justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "row", marginTop: "15px"}}>
        <label>
        <input
          type="radio"
          name="gender"
          value="male"
          // checked={state.gender === "male"}
          onChange={handleChange}
        />{" "}
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          // checked={gender === "female"}
          onChange={handleChange}
        />{" "}
        Female
      </label>
      <label >
        <input
          type="radio"
          name="gender"
          value="non-binary"
          // checked={state.gender === "male"}
          onChange={handleChange}
        />{" "}
        Non-Binary
      </label>


        </Box>
        
        {/* <TextField
          required
          id="gender"
          name="gender"
          type="radio"
          placeholder="Gender"
          value={formData.gender}
          onChange={handleChange}
          className="radio-inline"
          variant="outlined"
          
        /> */}

        <label htmlFor="income_year" className="label">
          YEARS OF EXPERIENCE
        </label>
        <TextField
          required
          type="number"
          min="0"
          id="income_year"
          name="income_year"
          placeholder="Years of Experience"
          value={formData.years_exp}
          onChange={handleChange}
          className="input"
          variant="outlined"
          onKeyPress={preventMinus}

        />
      <Box sx={{display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            marginTop: "15px"}}>
      <Button
          type="submit"
          onSubmit={handleSubmit}
          className="button"
          variant="contained"
          color="primary"
          sx={{
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            margin: "10px"
          }}
        >
          Submit
        </Button>
        <Button
          type="reset"
          onClick={handleReset}
          className="button"
          variant="outlined"
          color="secondary"
          sx={{
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"

          }}
        >
          Reset
        </Button>

      </Box>
       
      </form>
    </Box>
  );
};

export default MainForm;
