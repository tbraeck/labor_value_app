'use client'

import { Box, Button } from "@mui/material";
import Image from 'next/image';
import Link from "next/link";
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/home';

  const navItems = [
    { text: 'About', link: '/about' },
    { text: 'Contact', link: '/contact' },
  ];

  return (
    <Box className="w-full h-[60px] bg-[#24a0ed] flex items-center justify-between px-4">
      {/* Conditionally render logo only on the homepage */}
      {isHomePage && (
        <Box className="flex items-center">
          <Link href="/home" passHref>
            <Image src="/value2.png" alt="Logo" width={50} height={50} style={{ padding: 0, margin: 0 }} />
          </Link>
        </Box>
      )}

      {/* Navigation Links */}
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
        {navItems.map((item) => (
          <Link href={item.link} passHref key={item.text}>
            <Button
              variant="contained"
              sx={{
                width: '100px',
                marginLeft: '10px', // Adds some spacing between buttons
              }}
            >
              {item.text.toUpperCase()}
            </Button>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default Header;
