import SearchAppBar from "./_components/SearchAppBar";
import MainForm from "./_components/MainForm";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import './styles/globals.css';


export default function Home() {
  return (
    <div className="relative h-screen w-screen bg-cover bg-center" style={{ backgroundImage: "url('../public/_assets/working.jpg')", backgroundRepeat: "no-repeat", }}>
    <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
    <CssBaseline/>
    <Box className="relative z-10 w-full">
      <SearchAppBar />
    </Box>
    <MainForm/>
    
    
  </div>

  );
}
