import React from 'react'
import Link from 'next/link'
import { Button } from '@mui/material'

const About = () => {
  return (
    <div>
      <Link href='/home'>
      <Button variant='contained'>
        HOME
      </Button>
      </Link>
      <h1>page is here</h1>
    </div>
  )
}

export default About
