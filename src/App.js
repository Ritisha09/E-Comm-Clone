// import logo from './logo.svg';
import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import Cart from './CartPage/Cart';
import ElectronicsContent from "./ElectronicsContent/ElectronicsContent";
import Header from './Header';
import Home from './Home';
import LoginPage from "./LoginPage/LoginPage";
import MobileContent from './MobileContent/MobileContent';
import CartContextProvider from "./Context/CartContext";
import MobileProducts from './MobileContent/MobileProducts.js'

function App(){
  return (
     <Router>
      <div className="App">
        <CartContextProvider > 
          <Switch>
            {/* <Header /> */}
            <Route exact path = "/mobile">
              {/* <Header /> */}
              <MobileContent/>
            </Route>
            <Route exact path = "/electronics">
              {/* <Header /> */}
              <ElectronicsContent/>
            </Route>
            <Route exact path = "/order/:id">
              {/* <Header /> */}
              <MobileProducts/>
            </Route>
            <Route exact path ="/cart"> 
              {/* <Header /> */}
              <Cart/>
            </Route>
            <Route exact path ="/login"> 
              <LoginPage/> 
            </Route>
            <Route exact path = "">
              <Header />
              <Home />
            </Route> 
          </Switch>  
         </CartContextProvider> 
      </div>
    </Router>
  );
}
export default App;
