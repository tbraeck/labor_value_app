import React from 'react';
import SearchAppBar from "./_components/SearchAppBar";
import Head from "next/head";
import Box from '@mui/material/Box';
import MainForm from './_components/MainForm';
import DataTable from './_components/DataTable';

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
        <DataTable   countries={countries} />
      </Box>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v3.1/region/asia");
  const countries = await res.json();

  return {
      props: {
          countries,
      },
  };
};