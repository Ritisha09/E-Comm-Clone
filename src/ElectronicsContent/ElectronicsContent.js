import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import "./ElectronicsContent.css"

function ElectronicsContent() {
  return (
    <div style = {{display: "flex"}} className = "Electronic_Content" >
        <div>
           <LeftSide/>
        </div>
        <div>
            <RightSide/>
        </div>
    </div>
  )
}

export default ElectronicsContent;