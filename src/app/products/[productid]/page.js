import React from 'react'

const ProductDetails = ({params}) => {
  return (
    <div>
      <h1>Details about product {params.productid}</h1>
      <h2>FEATURES OF PRODUCT</h2>
    </div>
  )
}

export default ProductDetails
