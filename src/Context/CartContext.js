import React, { createContext, Component } from 'react'
import MobileProduct from '../MobileContent/MobileProduct.json'



{/*
import React, {createContext, useReducer} from "react";
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
    dispatch: () => {}
};

export const CartContext = createContext({
    state: initialState,
});  

export const reducer = (state = initialState, action) => {
    console.log(action)
    if(action.type === "ADD_TO_CART"){
        return{
            ...state,
            item_cart: [...state.item_cart, action.item_data],
        };
    }
    return state;
}  

const Cart_Info = () => {

    // Reducer hook--update state change
    const [state, dispatch] = useReducer(reducer,initialState);

    return (
        <CartContext.Provider value= {{state, dispatch}}>
            <Cart />
            <MobileProducts />
        </CartContext.Provider>  
    );
};
*/}

{/*
class CartContextProvider extends Component { 
    constructor(){
        super();
        let existingCart = localStorage.getItem('myCart') != undefined ? JSON.parse(localStorage.getItem('myCart')) : [];
        let cardAmount = existingCart.length;

        this.state = {
            item: existingCart ,
            size: cardAmount,

            increment =(value) => {
                 let itemList = this.state.item;
                 itemList.push(value);

                 this.setState({item: itemList});
                 this.setState({size: this.state.item.length});

                 this.state.saveToLocalCache();
            },

            saveToLocalCache: () => {
                localStorage.setItem('myCart', JSON.stringify(this.state.item));
            }
         }
    }
    render(){
        return (
            <CartContext.Provider value= {{...this.state, ...this.increment}}>
                {this.props.children}
            </CartContext.Provider>
        );
    }
}
*/}

//export default Cart_Info;



export const CartContext = createContext();

let existingCart = localStorage.getItem('myCart') != undefined ? JSON.parse(localStorage.getItem('myCart')) : [];
let cart_size = existingCart.length;

class CartContextProvider extends Component{
   

    state = {
        item: MobileProduct,
        item_cart: existingCart,
        //totalAmount : 0,
        //totalItem: cart_size,
    }

    removeFromCart = (product_id) => {
        console.log(product_id)
        //let item_list = this.state.item_cart;
        let item_arr = this.state.item_cart.filter(mobile => mobile.id != product_id)
        
        console.log(item_arr)
        this.setState( {item_cart: item_arr});
        this.setState( {totalItem: this.state.item_cart.length})

        //this.saveToLocalCache();
        console.log('cart product', this.state.item_cart);
     }

    addToCart = (product) => {
        let itemList = this.state.item_cart;
        itemList.push(product)

        this.setState( {item_cart: itemList});
        this.setState( {totalItem: this.state.item_cart.length})

        this.saveToLocalCache();
        console.log('cart product', this.state.item_cart);
    };

    totalAmount = () => {
        let price = 0;
        for (let i = 0; i< this.state.item_cart.length ; i++){
            price += parseInt(this.state.item_cart[i].price);
        }
        this.saveToLocalCache();
        return price;
    }

    
    totalItem = () => {
        let size = this.state.item_cart.length;
        this.saveToLocalCache();
        return size;
    }

     emptyCart = () => {
        //let item_list = this.state.item_cart;
        let item_list = [];
        this.setState ( {item_cart: item_list});
        this.setState( {totalItem: this.state.item_cart.length})

        this.saveToLocalCache();
        console.log('cart product', this.state.item_cart);
     
     }

     saveToLocalCache = () => {
        localStorage.setItem('myCart', JSON.stringify(this.state.item_cart))
    };


    render() {
        return(
            <CartContext.Provider 
                value= {{
                    item: this.state.item,
                    totalItem: this.totalItem,
                    item_cart: this.state.item_cart,
                    addToCart: this.addToCart,
                    totalAmount: this.totalAmount,
                    removeFromCart: this.removeFromCart,
                    emptyCart: this.emptyCart

                }}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}

export default CartContextProvider;

