import React from 'react'
import './ElectronicsContent.css'

function LeftSide() {
  return (
    <div className = "Left_Side">
      <div style = {{margin: "5px"}} className = "brand_header">
            <b>Brand</b>
        </div>
        <div className = "brand_name">
            <label>
                <input type="checkbox" value = "Kitchen & Home Appliances" /> Kitchen & Home Appliances
            </label>
            <label>
                <input type="checkbox" value = "Keyboards, Mice & Input Devices" /> Keyboards, Mice & Input Devices
            </label>
            <label>
                <input type="checkbox" value = "Industrial Appliances" /> Industrial Appliances
            </label>
        </div>
    </div>
  )
}

export default LeftSide
