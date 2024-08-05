'use client';

import { Box, FormControl, InputLabel, MenuItem, OutlinedInput, Select } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const MainForm = () => {
  const initialFormData = {
    job_title: "",
    zip_code: "",
    gender: "",
    age: "",
    race: "",
    income_year: ""
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const names = [
    'Oliver Hansen', 'Van Henry', 'April Tucker', 'Ralph Hubbard',
    'Omar Alexander', 'Carlos Abbott', 'Miriam Wagner', 'Bradley Wilkerson',
    'Virginia Andrews', 'Kelly Snyder',
  ];


  const races = [
    'American Indian or Alaska Native', 'Asian', 'Black or African American', 'Native Hawaiian or Other Pacific Islander', 'Other Race', 'White'
  ];

  const theme = useTheme();
  const [personName, setPersonName] = useState([]);

  const getStyles = (name, personName) => ({
    fontWeight: personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
  });

  const handleSelectChange = (event) => {
    const { value } = event.target;
    setPersonName(typeof value === 'string' ? value.split(',') : value);
  };

  const [formData, setFormData] = useState(initialFormData);
  const [jobOptions, setJobOptions] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);

  useEffect(() => {
    fetch('/api/bls')
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
      })
      .then((data) => {
        const jobsWithIds = data.Results.series[0].data.map((job, index) => ({
          job_title: `Job ${index + 1}`, // Replace with actual job title if available
          unique_id: `${job.year}_${index}`
        }));
        const sortedJobs = jobsWithIds.sort((a, b) => a.job_title.localeCompare(b.job_title));
        setJobOptions(sortedJobs);
        setFilteredOptions(sortedJobs);
      })
      .catch((error) => console.error("Error fetching job data:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleReset = (e) => {
    e.preventDefault();
    setFormData(initialFormData);
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
    if (e.code === 'Minus') e.preventDefault();
  };

  return (
    <Box>
    <Box className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="formImg">
          <Image src="/scale2.gif" height="100" width="100" alt="Scale" unoptimized />
        </div>
        <label htmlFor="job_title" className="label">JOB NAME</label>
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

        <label htmlFor="zip_code" className="label">ZIP CODE</label>
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

        <Box sx={{ display: "flex", flexDirection: "column", marginTop: "15px" }}>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
            /> Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
            /> Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="non-binary"
              checked={formData.gender === "non-binary"}
              onChange={handleChange}
            /> Non-Binary
          </label>
        </Box>

        <label htmlFor="age" className="label">AGE</label>
        <TextField
          required
          type="number"
          min="0"
          id="age"
          name="age"
          placeholder="201"
          value={formData.age}
          onChange={handleChange}
          className="input"
          variant="outlined"
          onKeyPress={preventMinus}
        />

        <Box>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-name-label">Name</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={personName}
              onChange={handleSelectChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name} style={getStyles(name, personName)}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <label htmlFor="income_year" className="label">YEARS OF EXPERIENCE</label>
        <TextField
          required
          type="number"
          min="0"
          id="income_year"
          name="income_year"
          placeholder="Years of Experience"
          value={formData.income_year}
          onChange={handleChange}
          className="input"
          variant="outlined"
          onKeyPress={preventMinus}
        />

        <Box
          className="buttonBox"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            marginTop: "15px"
          }}
        >
          <Button
            type="submit"
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
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '16px', position: 'absolute', right: 0, top: 0 }}>
          <Link to='/'><Button variant='contained'>HOME</Button></Link>

      </Box>
    </Box>
  );
};

export default MainForm;
