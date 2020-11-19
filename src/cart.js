import React,{useEffect, useState} from "react"
import {useContext} from "react";
import {ImgContext} from "./imgContext"
import CheckoutGrid from "./checkOutGrid"



function Cart(props){
    const {cartImgUrl,handleCartImgUrl} = useContext(ImgContext)

    
    const [total,setTotal] = useState(0.00);
   
   const cartRows = cartImgUrl.map(imgUrl => {
        
        return <CheckoutGrid  imgUrl={imgUrl}/>
                
       }) 

       useEffect(()=>{
           setTotal(cartRows.length * 5.99)
       })


    return(
    <div className="cart-container">
        <h1 className="cart-h1">Check Out</h1>
       
       {cartRows}
       
        <h1 className="total-h1"> Total: <span>${total}</span></h1>
        <div className="btn-div"><button>Place Order</button></div>
    </div>)
}
export default Cart