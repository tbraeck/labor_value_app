import React from 'react'
import Link from 'next/link'
import { Button } from '@mui/material'

const Contact = () => {
  return (
    <div>
      <Link href='/home'>
      <Button variant='contained'>
        HOME
      </Button>
      </Link>
      <form>
        <label>Contact US</label>
        <input 
        type="text" 
        name="contact US" 
        placeholder="Contact US">
            
        </input>
      </form>
    </div>
  )
}

export default Contact
