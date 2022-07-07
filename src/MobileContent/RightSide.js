import React from 'react'
import "./MobileContent.css"
// import MobileProduct from './MobileProduct'
import MobileProduct from './MobileProduct.json'
import Rating from '@mui/material/Rating';
// import { CartContext } from '../Context/CartContext';
import {Link} from "react-router-dom";


function RightSide() {

  // const[productsLists, setProductLists] = useState()
  // setProductLists(MobileProduct)
  // console.log(MobileProduct)

  // const {mobile,size, increment} = useContext(CartContext);
  // const {mobileDetails, setMobileDetails} = useState([]);

  // const addToCart = function(){
  //   increment(mobileDetails);
  // }

  // const mobileData = require('./MobileProduct.json')
  // console.log(mobileData)

  

  // console.log(mobileData)

  return (
    <div className = "Right_Side">
      
       {
        MobileProduct.map(MobileProduct => {
          return(

            <Link to = {'/order/' + MobileProduct.id} >
            <div key = {MobileProduct.id} className = "mobileProduct">
                <div className="mobile_image">
                    <img src= {MobileProduct.image} height = "288px" alt="" />
                </div>
                <div className="mobile_title">
                    {MobileProduct.title}
                </div>
                <div className="mobile_rating">
                  <Rating name = "read-only" value = {MobileProduct.rating} readOnly />                    
                </div> 
                <div className="mobile_price">
                    <b>₹</b>
                    {MobileProduct.price}
                </div> 
                {/* <button className = "product_button"> Add to Cart</button>  */}
            </div>
            </Link>

          )
        })
      } 
      
      


      {/* <MobileProduct image = "https://m.media-amazon.com/images/I/716FVMg72GS._AC_UL320_.jpg"
                     title = "Mi 11X Pro 5G (Cosmic Black, 8GB RAM, 128GB Storage) | Snapdragon 888 | 108MP Camera |"
                     rating = {3}
                     price = "34,999"
      />
       <MobileProduct image = "https://m.media-amazon.com/images/I/81QVLzeVckL._AC_UY218_.jpg"
                     title = "Samsung Galaxy S20 FE 5G (Cloud Lavender, 8GB RAM, 128GB Storage) "
                     rating = {4}
                     price = "36,990"
      />
       <MobileProduct image = "https://m.media-amazon.com/images/I/61AwGDDZd3L._AC_UY218_.jpg"
                     title = "Apple iPhone 13 Pro (256 GB) - Alpine Green "
                     rating = {4}
                     price = "1,29,900"
      />
       <MobileProduct image = "https://m.media-amazon.com/images/I/81i1A1MgXBL._AC_UY218_.jpg"
                     title = "Samsung Galaxy A13 Blue, 4GB RAM, 64GB Storage with No Cost EMI/Additional Exchange Offers, (SM-A135FLBGINS) "
                     rating = {3}
                     price = "13,999"
      /> */}

    </div>
  )
}

export default RightSide
