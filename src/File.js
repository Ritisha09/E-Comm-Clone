import { responsiveProperty } from '@mui/material/styles/cssUtils';
import React, { useState,useEffect, useCallback } from 'react'
import MobileProduct from './MobileContent/MobileProduct.json'


const File = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
      const {data} = await MobileProduct.list();
    }

    useEffect(() => {
        fetchProducts();
    },[])

    console.log(products)

}

{/* function File(props) {

    const[productsLists, setProductLists] = useState([])
    
    //const 
    
    useEffect(() => {

        
        let result = MobileProduct.filter(mob => mob.id == 1234561);
        console.log(2) 
        console.log(result)
         setProductLists(result[0]); 

     }, [])
    */}
     

    // console.log(MobileProduct.mobile[0])

    // const map = MobileProduct.map(Mobile,1)
    // console.log(map)

    // const[productsLists, setProductLists] = useState()
    // const mobileData = require('./MobileContent/MobileProduct.json')
    // console.log(mobileData[0].id)
    //setProductLists(mobileData)
    //console.log(productsLists)

    // useEffect(() => {
    //     let list = MobileProduct
    //     setProductLists(list)
 
    // })



    // const[productsLists, setProductLists] = useState()
    // setProductLists(MobileProduct)

    // const[cart,setCart] = useState()
    // const addToCart = async(mobId, qty) => {
    //    const response = await MobileProduct.add(mobId,qty)
    //    console.log(response)
    // }
    
    // const displayData = require('./MobileContent/MobileProduct.json')
    // console.log(displayData)



    // async function pullJson() {
    //     console.log(MobileProduct)
    //     displayData = MobileProduct.map(function(todo) {
    //         return(
    //             <p key = {todo.id}>{todo.title}</p>
    //         )
    //     })
    //     setProductLists(displayData)
    // }

    // useEffect(() => {
    //     pullJson()
    // },[])

//     return (
//         <div>
           
//             {/* <p> {productsLists} </p> */}

//             {productsLists.title}
//         </div>
//     )
// }

export default File
