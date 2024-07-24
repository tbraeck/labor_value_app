
import React from 'react';
import SearchAppBar from '../_components/SearchAppBar';
// import Head from "next/head";
import Box from '@mui/material/Box';
import MainForm from '../_components/MainForm';
// import DataTable from './_components/DataTable';
import DataTable2 from '../_components/DataTable3';
import Image from 'next/image';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import '../styles/globals.css';
import { Button } from '@mui/material';

export default function Home() {
  return (
    
    <div className="background-container">
       {/* <Head>
            <link rel="shortcut icon" href="/LOGO.ico" />
        </Head> */}
      <Box className="relative z-10 w-full top-bar">
        <SearchAppBar 
        />
      </Box>
      <Link href='/mainform'>
      <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
     
      <Button
        variant="contained"
        sx={{
          height: '70px',
          width: '200px',
          fontSize: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        VALUE~ME
      </Button>
    </Box>
    </Link>

      {/* <Box className="flex direction-column justify-center items-center">
        <MainForm/>
      </Box> */}
      
      {/* <Box>
        <DataTable className="flex direction-column justify-center items-center"/>
      </Box> */}
      {/* <Box>
        <DataTable2/>
      </Box> */}
    </div>
  );
}

