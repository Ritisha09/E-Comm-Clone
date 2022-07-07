import React , {useContext} from 'react'
import "./Subtotal.css"
import { CartContext } from '../Context/CartContext'


function Subtotal() {
  const { totalAmount, totalItem, emptyCart} =  useContext(CartContext);
  
  return (
    <div className='subtotal'>
       <div className= 'subtotal_detail'>
            <div style = {{fontSize: "25px"}}> SubTotal ( {totalItem()} items): 
              <div>
                <b>₹ {totalAmount()} </b>
              </div>
            </div>
            <div>
              <button className = 'subtotal_button' style = {{fontSize: "20px"}}
                      onClick={() => emptyCart()}> Empty Cart
              </button>
            </div>
       </div>
       
    </div>
  )
}

export default Subtotal
