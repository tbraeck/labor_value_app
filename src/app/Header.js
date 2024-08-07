import Button, {
    Box
} from "@mui/material"
import Link from "next/link"


const Header = () => {
    
  return (
    <Box className='w-full h-[60px] bg-[#24a0ed]'>
      HEADER
      <Box className='justify-center'>
      <Link href='/home'>
      <Button variant='contained'
      sx={{
        width: '100px',
      }}>
        HOME
      </Button>
      </Link>
      </Box>
    </Box>
  )
}

export default Header
