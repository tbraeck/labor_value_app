import React from 'react';
import SearchAppBar from "./_components/SearchAppBar";
import Box from '@mui/material/Box';

import './styles/globals.css';

export default function Home() {

  const backgroundImageStyle = {
    backgroundImage: `url(/public/working.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <div className="relative h-screen" style={backgroundImageStyle}>
      <Box className="relative z-10 w-full">
        <SearchAppBar />
      </Box>
    </div>
  );
}
