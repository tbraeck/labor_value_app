
// import SearchAppBar from '../_components/SearchAppBar';
// import Head from "next/head";
import { Button, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../Header'; // Reuse the Header component
import '../styles/globals.css';

const navItems = [
  { text: 'Home', link: '/home' },
  { text: 'About', link: '/about' },
  { text: 'Contact', link: '/contact' },
];

const Home = () => {
  return (
    <div className="background-container">
      {/* Reuse the Header component with logo and nav items */}
      <Header>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link href='/home' passHref>
            <Image src="/value2.png" alt='Logo' width={100} height={100} style={{ padding: 0, margin: 0 }} />
          </Link>
        </Box>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <List sx={{ display: 'flex' }}>
            {navItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <Link href={item.link} passHref>
                  <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Header>

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
        <Link href='/mainform'>
          <Button
            variant="contained"
            sx={{
              height: '150px',
              width: '350px',
              fontSize: '20px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              font: 'montserrat',
              borderRadius: '20px',
            }}
          >
            <Image src='/VALUE_ME_1.png' width={300} height={100} alt='valueme'></Image>
          </Button>
        </Link>
      </Box>
    </div>
  );
};

export default Home;


