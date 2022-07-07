import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import "./MobileContent.css"
//import MobileProduct from './MobileProduct.json'

function MobileContent() {
  
  // const[cart,setCart] = useState()
  // const addToCart = async function (mobId, qty) {
  //   const response = await MobileProduct.add(mobId, qty)
  //   console.log(response)
  // }

  //addToCart ={addToCart}

  return (
    <div style = {{display: "flex"}} className = "Mobile_Content">
      <div>
           <LeftSide/>
        </div>
        <div>
            <RightSide  />
        </div>
    </div>
  )
}

export default MobileContent
