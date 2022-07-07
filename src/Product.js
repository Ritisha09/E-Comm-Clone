import React from 'react'
import "./Product.css";

function Product({title, price, image, rating}) {
  return (
    <div className ="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price"></p>
            <small>$</small>
            <strong>{price}</strong>
      </div>
      <div className="product_rating">
        
      </div>

      <img src= {image} alt="" />
      <button>Add to Cart</button>     
    </div>
  )
}

export default Product
