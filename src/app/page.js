import React from 'react';
import SearchAppBar from "./_components/SearchAppBar";
import Head from "next/head";

// import ImgMediaCard from './_components/ImgMediaCard';
// import ValueForm from './_components/ValueForm'; 
import Box from '@mui/material/Box';
import MainForm from './_components/MainForm';

import './styles/globals.css';

export default function Home() {
  return (
    
    <div className="background-container">
       <Head>
            <link rel="icon" href="%PUBLIC_URL%/LOGO.ico" />
        </Head>
      <Box className="relative z-10 w-full top-bar">
        <SearchAppBar />
      </Box>
      <Box className="flex direction-column justify-center items-center">
        <MainForm/>
      </Box>
    </div>
  );
}
