{/*
import React, {useState,useEffect,useReducer, useContext }from 'react'
import "./MobileContent.css"
import MobileProduct from './MobileProduct.json'
import Rating from '@mui/material/Rating';
import { Grid, Paper } from '@mui/material';
import {Link, useParams} from "react-router-dom";
import {CartContext}  from '../Context/CartContext';
import {reducer}  from '../Context/CartContext';
//import Cart_Info from '../Context/CartContext'
//import CartItems from '../CartPage/CartItems';

function MobileProducts(props) {

    const [{item_cart}, dispatch] = useContext(CartContext);

    // const item= useContext(CartContext);
    // const size = useContext(CartContext);
    // const increment = useContext(CartContext);

    
    //console.log(item)
    const[productsLists, setProductLists] = useState([]);
    let {id} = useParams();

    // const addToCart = function(){
    //      console.log("clicked");
    //      <CartItems />
    //      ///increment();
    // }

   
        // console.log("clicked");
        // <CartItems />
        ///increment();
   
    useEffect(() => {
        let mobile = MobileProduct.filter(mob => mob.id == id);
        // console.log(2) 
        //console.log(mobile)
        setProductLists(mobile[0]);
    }, [])

    
    const addToCart = () => {
         dispatch({
             type: "ADD_TO_CART",
             item_data: {
                id: productsLists.id,
                title: productsLists.title,
                image: productsLists.image,
                price: productsLists.price,
                rating: productsLists.rating,
             }
         });
    };



  return (
    <div>
        <Grid container>
            <Grid item xs = {5}>
               
                <img src= {productsLists.image} alt="" className="mobileProduct_image" />
            </Grid>
            <Grid item xs = {4}>
                <div className="mobileProduct_detail">
                    <div style = {{fontSize: "24px", lineHeight: "32px", fontWeight: 500}}>
                        {productsLists.title}
                    </div>
                    <div >
                        <Rating name = "read-only" value = {productsLists?.rating || null } readOnly style = {{ fontSize: "20px"}}/>                    
                    </div> 
                    <hr></hr>
                    <div>
                        <div className="textgap">Price: <span className="mobile_price" > <b>₹</b> {productsLists.price} </span></div>
                        <div className="textgap">Free delivery: <strong> {productsLists.delivery } </strong></div>
                        <div className="textgap">EMI Starts at ₹{productsLists.EMI}. No Cost EMI available</div>
                        <div className="textgap" style = {{color: "#007600", fontSize: "20px"}}>{productsLists.status}</div>
                    </div>
                </div>
            </Grid>
            <Grid item xs = {3}>
                <Paper variant = "outlined"  className = "mobileProduct__order " style={{backgroundColor: "lightgray" ,border: "1px solid darkgrak", marginTop: "50px"}}>
                    <div>
                        <div></div>
                        
                        <button className="mobileProduct_button addToCart" onClick={() => addToCart()} >Add to Cart</button>
                        <Link to = "/cart">
                        <button className="mobileProduct_button buyNow">Buy Now</button>
                        </Link>
                    </div>
                </Paper> 
                
            </Grid>
            
        </Grid>
    </div>
  )
}

export default MobileProducts

*/}


//**********************
// CartContext.js
//************************


{/* import React, {createContext, useReducer} from "react";
import Cart from "../CartPage/Cart";
import MobileProducts from '../MobileContent/MobileProducts.js'
//import {reducer} from './reducer.js'
import MobileProduct from '../MobileContent/MobileProduct.json'
//import CartItems from '../CartPage/CartItems'



export const initialState = {
    item: MobileProduct,
    item_cart: [],
    totalAmount : 0,
    totalItem: 0,
};

export const CartContext = createContext({
    state: initialState,
}); 

// const [products, setProduct]  = useState( MobileProduct);

// console.log(99)
// console.log(products)    

// let existingCart = localStorage.getItem('myCart') != undefined ? JSON.parse(localStorage.getItem('myCart')) : [];
// let cardSize = existingCart.length;


    
export const reducer = (state = initialState, action) => {
    console.log(action)
    if(action.type === "ADD_TO_CART"){
        return{
            ...state,
            item_cart: [...state.item_cart, action.item_data],
            
            // item_cart: state.item.filter((curElem) => {
            //     return curElem.id !== action.paylof;
            // })
        };
    }
    return state;
}  

const Cart_Info = () => {


    // Reducer hook--update state change
    const [state, dispatch] = useReducer(reducer,initialState);

    // to add elements to cart
    // const addToCart = () => {

    //     // let itemList = state.item_cart;
    //     // itemList.push(id);

    //     // this.setState({item: itemList});
    //     // this.setState({size: this.state.item.length});

    //     // this.state.saveToLocalCache();
        
    //     // return(
    //     // // <CartItems arr = {state.item} />
    //     //     <Cart />
    //     // )
        
    //     dispatch({
    //         type: "ADD_TO_CART",
    //         item_data: {
    //             id: id
    //         }
            
    //     });
    // };

    // const saveToLocalCache: () => {
    //     (localStorage.setItem('myCart', JSON.stringify(state.item_cart));
    // )};


    return (
        <CartContext.Provider value= {[state,dispatch]}>
            <Cart />
            <MobileProducts />
        </CartContext.Provider>  
    );
};
 */}