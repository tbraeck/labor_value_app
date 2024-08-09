
import SearchAppBar from '../_components/SearchAppBar';
// import Head from "next/head";
import Box from '@mui/material/Box';
// import DataTable from './_components/DataTable';
import { Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import '../styles/globals.css';

export default function Home() {
  return (
    
    <div className="background-container">
      <Box className="relative z-10 w-full top-bar">
        <SearchAppBar />
      </Box>
     
      <Box
  sx={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
   
  }}
>
  <Link href='/mainform' >
    <Button
      variant="contained"
      sx={{
        height: '150px',
        width: '350px',
        fontSize: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        font: 'montserrat'
      }}
    >
      <Image src='/VALUE_ME_1.png' width= {300} height={100} alt='valueme'></Image>
    </Button>
  </Link>
</Box>
    </div>
  );
}

