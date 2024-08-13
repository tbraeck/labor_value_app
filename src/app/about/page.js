'use client';

import { Box, Typography } from '@mui/material';
import Header from '../Header';

const About = () => {
  return (
    <Box >
      <Box className='flex justify-center flex-col  '>
        <Header></Header>
      </Box>
      <Box  className='flex justify-center items-center flex-col p-6 text-[xx-large]'>
      <Typography sx={{fontSize: "40px"}}  >
        ABOUT
      </Typography>
      <Box className='flex justify-center items-center flex-col p-10 w-3/5 '>
        <Typography sx={{fontSize: "25px"}} >
        {"ValueMe is an innovative platform designed to help individuals understand the true value of their labor using comprehensive data from the US Labor Statistics. By entering key details such as age, gender, zip code, job title, and years of experience into a user-friendly form, ValueMe calculates an accurate assessment of what your labor is worth. But it goes beyond just basic statistics. ValueMe also takes into account factors like company profit margins, employee numbers, and how your specific role contributes to the overall profitability of the business, providing you with a detailed and personalized analysis of your labor's value."}
        </Typography>
      </Box>
     
      </Box>
      
    </Box>
  )
}

export default About
