'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/data.json');
        setData(response.data);
        setFilteredData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    filterData(value);
  };

  const filterData = (value) => {
    const filtered = data.filter((item) => {
      const searchLower = value.toLowerCase();
      return (
        (item.job_title && item.job_title.toLowerCase().includes(searchLower)) ||
        (item.zip_code && item.zip_code.toString().includes(searchLower)) ||
        (item.gender && item.gender.toLowerCase().includes(searchLower)) ||
        (item.income_year && item.income_year.toLowerCase().includes(searchLower))
      );
    });
    setFilteredData(filtered);
  };

  const headerLogo = (
    <a href='http://localhost:3000/'>
      <Image src="/value2.png" alt='Logo' width={100} height={100} padding={0} margin={0} zIndex={9} />
    </a>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            {headerLogo}
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ flex: 1, padding: 2 }}>
          {/* Other content can go here */}
        </Box>
        <Box sx={{ flex: -1, paddingRight: 6, paddingTop: 4 }}>
  {searchTerm ? (
    filteredData.length > 0 ? (
      filteredData.map((item, index) => (
        <Box key={index} sx={{ marginBottom: 2 }}>
          <Typography variant="body1">{item.job_title}</Typography>
          <Typography variant="body2">Gender: {item.gender}</Typography>
          <Typography variant="body2" color="textSecondary">Income Year: {item.income_year}</Typography>
          <Typography variant="body2" color="textSecondary">Zip Code: {item.zip_code ? item.zip_code : 'N/A'}</Typography>
        </Box>
      ))
    ) : (
      <Typography variant="body1">No results found</Typography>
    )
  ) : (
    <Typography variant="body1">Please enter a search term</Typography>
  )}
</Box>

      </Box>
    </Box>
  );
}
