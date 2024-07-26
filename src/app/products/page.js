import React from 'react'
import Link from 'next/link'
import { Button } from '@mui/material'

const Products = () => {
  return (
    <>
      <Link href='/' passHref>
        <Button variant='contained'>HOME</Button>
      </Link>
      <h1>Product List</h1>
      <h2>
        <Link href='products/1'>Product 1</Link>
      </h2>
      <h2>
        <Link href='products/2'>Product 2</Link>
      </h2>
      <h2>
        <Link href='products/3'>Product 3</Link>
      </h2>
    </>
  )
}

export default Products
