import SearchAppBar from "./_components/SearchAppBar";
import Image from "next/image";
import { Box } from '@mui/material';

export default function Home() {
  const imageUrl = "/assets/working.jpg";

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
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
          height: '100vh',
          zIndex: -1,
        }}
      >
        <Image
          layout="fill"
          src={imageUrl}
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
            backgroundImage: url({imageUrl}) ,
          }}
        />
      </Box>
      <Box
        sx={{
          width: '100%',
          padding: 2,
          zIndex: 1,
        }}
      >
        <SearchAppBar />
      </Box>
    </Box>
  );
}
