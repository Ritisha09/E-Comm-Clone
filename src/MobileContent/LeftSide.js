import React from 'react'
import "./MobileContent.css"

function LeftSide(props) {
  return (
    <div className = "Left_Side">
        <div style = {{margin: "5px"}} className = "brand_header">
            <b>Brand</b>
        </div>
        <div className = "brand_name">
            <label>
                <input type="checkbox" value = "Apple" /> Apple
            </label>
            <label>
                <input type="checkbox" value = "Vivo" /> Vivo
            </label>
            <label>
                <input type="checkbox" value = "Samsung" /> Samsung
            </label>
        </div>
    </div>
  )
}

// style = "font-weight: bold"

export default LeftSide
