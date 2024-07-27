import React from 'react'
import Link from 'next/link'
import { Button } from '@mui/material'

const Products = () => {
    const productId = 100;
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
        <Link href='products/3' replace>Product 3</Link>
      </h2>
      <h2>
        <Link href={`products/${productId}`}>{productId}</Link>
      </h2>
    </>
  )
}

export default Products
