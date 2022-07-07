import React from 'react'
import "./ElectronicsContent.css"
import ElectronicsProduct from './ElectronicsProduct.json'
import Rating from '@mui/material/Rating';

function RightSide() {
  return (
    <div className = "Right_Side">
      {
        ElectronicsProduct.map(electronicsProduct => {
          return(
            <div key = {electronicsProduct.id} className = "electronicsProduct">
                <div className="electronics_image">
                    <img src= {electronicsProduct.image} height = "250px"  alt="" />
                </div>
                <div className="electronics_title">
                    {electronicsProduct.title}
                </div>
                <div className="electronics_rating">
                  <Rating name = "read-only" value = {electronicsProduct.rating} readOnly />                    
                </div> 
                <div className="electronics_price">
                    <b>₹</b>
                    {electronicsProduct.price}
                </div> 
                <button className = "product_button"> Add to Cart</button>
              </div>
          )
        })
      }
      
    </div>
  )
}

export default RightSide


