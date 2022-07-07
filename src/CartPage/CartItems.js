import React, {useContext}from 'react'
// import "./CheckoutItems.css"
import {CartContext}  from '../Context/CartContext';


function CartItems({arr}) {

  const {totalItem, removeFromCart} =  useContext(CartContext);

  return (
    <div className= "cartItems">
      {arr.map(item => { 
        return (
          <div className='item' key = {item.id + '/' + totalItem()} >
            
            <img src={item.image} alt="" className="cartItem_image" />
            <div className="cartItem_detail">
              <p className="cartItem_title">
                <b>{item.title}</b>
              </p>
              <div className="cartItem_price">
                <small><b>₹</b></small>
                <strong>{item.price}</strong>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove From Cart</button>
              </div>
          </div>
      )})}
    </div>  
  )
}

export default CartItems
