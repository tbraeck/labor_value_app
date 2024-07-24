import React from 'react'

const ProductDetails = ({params}) => {
  return (
    <div>
      <h1>Details about product {params.productid}</h1>
    </div>
  )
}

export default ProductDetails
