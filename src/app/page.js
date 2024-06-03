import SearchAppBar from "./_components/SearchAppBar";
import Box from '@mui/material/Box';
import './styles/globals.css';


export default function Home() {
  return (
    <div className="relative h-screen w-screen bg-cover bg-center" style={{ backgroundImage: "url('../public/_assets/working.jpg')" }}>
    <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
    <Box className="relative z-10 w-full">
      <SearchAppBar />
    </Box>
  </div>

  );
}
