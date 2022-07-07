import React, { useContext } from 'react'
import "./Cart.css"
import CartItems from './CartItems'
import Subtotal from './Subtotal'
// import MobileProduct from '../MobileContent/MobileProduct.json'
import { CartContext } from '../Context/CartContext'


{/*
const Cart = () => {
const {item} = useContext(CartContext);
  return(
    <CartItems arr = {item} />
    // <div>
    //   {
    //      item.map((mob_item) => {
    //       return (
    //         <div>
    //            {mob_item.id}
    //         </div>
    //       )
    //      })
    //   }
    // </div>
    
   
  )
  //console.log({MobileProduct})
  
}
*/}

function Cart() {

  const {item_cart} =  useContext(CartContext);

  //const {item} = useContext(CartContext);

  return (
    <div className = "cart">
            <div className="cart_left">
                <img className = " cart_add" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonLaunchpad/2022/LP_revamp/apparel/pc_oupons.jpg" alt="" height ="170px"/>

                <div>
                    <h2 className="cart_title">
                        Your Shopping Cart
                    </h2>
                    <CartItems arr = {item_cart} />
                </div>
            </div>
            <div className="cart_right">
                <Subtotal/>
            </div> 
    </div>
  )
}

export default Cart
// https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL_HMT/FDFO/1080x140.jpg
