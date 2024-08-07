'use client';

import { Box, Typography } from '@mui/material';
import Header from '../Header';

const About = () => {
  return (
    <Box className='flex justify-center flex-col  '>
      <Box>
        <Header></Header>
      </Box>
      
      
      <Box>
      <Typography variant='contained'>
        ABOUT
      </Typography>
      <Typography sx={{padding: "40px", width: "800px", justifyContent: "center", alignItems: "center"}} >
      {"I'm baby pabst pork belly twee, slow-carb brunch wolf banjo mumblecore salvia schlitz poutine asymmetrical. 90's locavore sriracha hashtag dreamcatcher. Forage ascot sus, selfies neutra messenger bag kickstarter. Af gochujang irony aesthetic sriracha raw denim. Hoodie you probably haven't heard of them edison bulb fit. Normcore neutra drinking vinegar dreamcatcher single-origin coffee pabst. Scenester you probably haven't heard of them glossier, PBR&B trust fund lomo meggings plaid helvetica 8-bit vibecession hot chicken bitters. Bicycle rights jawn typewriter venmo. Tbh readymade subway tile glossier celiac iPhone paleo butcher farm-to-table meditation heirloom cloud bread roof party. Hoodie yuccie chicharrones neutra selfies, hammock direct trade ascot freegan ennui disrupt forage big mood shabby chic art party. Chartreuse vinyl marfa pitchfork. Hammock listicle literally quinoa mixtape selfies vexillologist wayfarers meditation drinking vinegar cray photo booth. Small batch gorpcore health goth shoreditch whatever activated charcoal Brooklyn ennui marfa thundercats waistcoat marxism dreamcatcher hella chillwave. Irony twee health goth, craft beer semiotics keffiyeh authentic lumbersexual knausgaard asymmetrical gluten-free kale chips. 8-bit meditation direct trade hell of narwhal, marxism PBR&B locavore. Sartorial health goth fanny pack, kogi shabby chic iceland 8-bit cupping yes plz typewriter vinyl VHS hexagon migas shaman. Affogato hella yr, beard stumptown tote bag big mood. Marxism succulents lyft slow-carb. La croix gastropub live-edge succulents twee letterpress selfies aesthetic. Vaporware tote bag plaid, ugh chillwave unicorn fam. Distillery blog kale chips mumblecore. Hoodie wolf ramps poke +1, man bun cred cornhole. Tbh meh sustainable selvage neutra vape chicharrones put a bird on it subway tile listicle meditation tattooed hell of keytar glossier."}
      </Typography>
      </Box>
      
    </Box>
  )
}

export default About
