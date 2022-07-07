import React from 'react'
import AddBanner from './AddBanner';
import AddBanner2 from './AddBanner2';
import './Home.css'
//import Product from "./Product"

function Home() {
  return (
    // Home Component
    <div className = "home">
      {/* Home container */}
      <div className="home_container">
        <img background-image className = "home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Suzhal/3000x1200_Hero-Tall_NP._CB635319275_.jpg" alt = "" />
      </div>

      <div style = {{display: "flex", flexWrap: "wrap"}} className="home_row">
        <AddBanner/>
        <AddBanner2/>
        <AddBanner/>
        <AddBanner2/>
        <AddBanner/>
        <AddBanner2/>
        <AddBanner/>
        <AddBanner2/>
        
      </div>

      <div className="home_row">

      </div>

      <div className="home_row">

      </div>

      <div className="home_row">

      </div>

    </div>
  );
}

export default Home
