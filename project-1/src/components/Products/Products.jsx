import React from 'react'
import "./Products.scss"
import Product from './Product/Product'
//importing here product dont feel discomfort
function Products() {
  return (
    <div>
      <div className="products-container">
        <div className='sec-heading'>Section Heading</div>
        <div className='products'>

          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
        </div>
      </div>
    </div>
  )
}

export default Products
