import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BalanceIcon from '@mui/icons-material/Balance';
import FreeSolo from './FreeSolo';
import { Group } from '@mui/icons-material';

export default function ImgMediaCard() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f5f5f5',
          padding: 2, // add padding around the card if needed
        }}
      >
        <Card sx={{ minWidth: 500, minHeight: 400 }} elevation={5}>
          {/* <CardMedia
            component="img"
            alt="green iguana"
            maxHeight="100px"
            height="100px"
            image="https://static.vecteezy.com/system/resources/thumbnails/005/972/881/small/business-team-employees-user-icon-free-vector.jpg"
          /> */}
          <BalanceIcon 
          color='secondary'
          sx={{ fontSize: 100, justifyContent: 'center', alignItems: 'center' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" sx={{justifyContent: "center"}} component="div">
              SEARCH JOB VALUES HERE
            </Typography>
            <Box>
              {/* <FreeSolo/> */}
            </Box>
            {/* <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica.
            </Typography> */}
          </CardContent>
         <CardActions  sx={{
            display: 'flex',
            alignitems: 'center',
          }}> 
             <Button size="medium" variant='contained' color='secondary' elevation={5}>SEARCH</Button>
            {/* <Button size="small">Learn More</Button> */}
          </CardActions> 
        </Card>
      </Box>
    </div>
  );
}
