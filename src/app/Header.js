import { Box, Button } from "@mui/material";
import Link from "next/link";

const Header = () => {
  return (
<Box className="w-full h-[60px] bg-[#24a0ed] flex items-center justify-between px-4">
      <Box className="flex justify-center">
        <Link href="/home" passHref>
          <Button
            variant="contained"
            sx={{
              width: '100px',
            }}
          >
            HOME
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Header;
