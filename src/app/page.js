import React from 'react';
import SearchAppBar from "./_components/SearchAppBar";
import ImgMediaCard from './_components/ImgMediaCard';
// import ValueForm from './_components/ValueForm'; 
import Box from '@mui/material/Box';

import './styles/globals.css';

export default function Home() {
  return (
    <div className="background-container">
      <Box className="relative z-10 w-full top-bar">
        <SearchAppBar />
      </Box>
      <Box className="flex direction-column justify-center items-center">
        <ImgMediaCard/>
      </Box>
    </div>
  );
}
