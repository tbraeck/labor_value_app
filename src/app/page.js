import SearchAppBar from "./_components/SearchAppBar";
import Image from "next/image";
import { Box } from '@mui/material';

export default function Home() {
  const imageUrl = "./assets/working.jpg";

  return (
    <Box
      sx={{
        position: 'relative',
        height: '500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      >
        <Image
          layout="fill"
          src="/working.jpg"
          alt="Image alt"
          style={{ objectFit: "cover" }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
          }}
        />
      </Box>
      <SearchAppBar />
    </Box>
  );
}
