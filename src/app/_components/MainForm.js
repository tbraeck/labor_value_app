'use client'

import React, { useState, useEffect } from "react";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const MainForm = () => {
  const initialFormData = {
    jobName: "",
    yearsExp: '',
    zipCode: "",
};

    const [formData, setFormData] = useState(initialFormData);
    const [jobOptions, setJobOptions] = useState([]);

    useEffect(() => {
        fetch('.data.json') 
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
                setJobOptions(data); 
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
      setFormData(initialFormData)

    }

    const handleAutocompleteChange = (event, newValue) => {
        setFormData({ ...formData, jobName: newValue });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
      console.log(formData.jobName)
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="jobName" className="label">
                JOB NAME
            </label>
            <Autocomplete
                freeSolo
                id="jobName"
                options={jobOptions.map((option) => option.jobName)} // Assuming each job has a jobName field
                value={formData.jobName}
                onChange={handleAutocompleteChange}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        name="jobName"
                        variant="outlined"
                        placeholder="Laborer"
                        className="input"
                        onChange={handleChange}
                    />
                )}
            />

            <label htmlFor="yearsExp" className="label">
                YEARS OF EXPERIENCE
            </label>
            <TextField
                required
                type="number"
                id="yearsExp"
                name="yearsExp"
                placeholder="Years of Experience"
                value={formData.yearsExp}
                onChange={handleChange}
                className="input"
                variant="outlined"
            />

            <label htmlFor="zipCode" className="label">
                ZIP CODE
            </label>
            <TextField
                required
                id="zipCode"
                name="zipCode"
                placeholder="Zip Code"
                value={formData.zipCode}
                onChange={handleChange}
                className="input"
                variant="outlined"
            />

            <Button type="submit" onSubmit={handleSubmit} className="button" variant="contained" color="primary">
                Submit
            </Button>
            <Button type="reset" onClick={handleReset}  className="button" variant="outlined" color="secondary">
                Reset
            </Button>
        </form>
    );
};

export default MainForm;
