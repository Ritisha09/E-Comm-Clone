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
// import File from './File';
import CartContextProvider from "./Context/CartContext";
import MobileProducts from './MobileContent/MobileProducts.js'

function App(){
  
  //const [products, setProduct]  = useState(MobileProduct);
  
  //  const fetch = async () => {
  //    const {data} = await MobileProduct.mob();
  //    console.log(2)
  //    setProduct(data);
  //  }

  //  useEffect(() => {
  //   fetch();
  //  },[])

  // console.log(products)


  
  // const fs = require('fs');
  // fs.readFile('./MobileContent/MobileProduct.json', 'utf-8', (err, jsonString) => {
  //   if (err) {
  //     console.log(err);
  //   }else{
  //     const data = JSON.parse(jsonString);
  //     console.log(data);
  //   }
  // })

  return (
    

     <Router>
      <div className="App">
        {/* <Header /> */}
        {/* <Cart /> */}
        {/* <Cart_Info /> */}

        {/* <File /> */}
        {/* <MobileContent/> */}
        
        {/* <MobileProducts/> */}

        
        <CartContextProvider > 
          <Switch>
            <Route exact path = "/mobile">
              <Header />
              <MobileContent/>
            </Route>

            <Route exact path = "/electronics">
              <Header />
              <ElectronicsContent/>
            </Route>

            <Route exact path = "/order/:id">
              <Header />
              <MobileProducts/>
            </Route>

            <Route exact path ="/cart"> 
              <Header />
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
