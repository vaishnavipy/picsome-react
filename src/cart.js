import React,{useEffect, useState} from "react"
import {useContext} from "react";
import {ImgContext} from "./imgContext"
import CheckoutGrid from "./checkOutGrid"



function Cart(props){
    const {cartImgUrl,handleClearCart} = useContext(ImgContext)

    
    const [total,setTotal] = useState(0.00);
   
   const cartRows = cartImgUrl.map(imgUrl => {
      //  console.log(cartImgUrl)
        return <CheckoutGrid  imgUrl={imgUrl} id={imgUrl}/>
                
       }) 

       useEffect(()=>{
           setTotal(cartImgUrl.length * 5.99)
       })

       function handlePlaceOrder(event){

        event.target.innerHTML = "Ordering..."

        setTimeout(()=>{
           
            handleClearCart();
            event.target.style.display = "none";
            document.getElementById("clearCart").style.display="block";

        },3000)

       }


    return(
    <div className="cart-container">
        <h1 className="cart-h1">Check Out</h1>
       
       {cartRows}
       
        <h1 className="total-h1"> Total: <span>${total}</span></h1>
        <div className="btn-div" onClick={handlePlaceOrder}><button>Place Order</button></div>
        <h2 id="clearCart">You have no items in your cart</h2>
    </div>)
}
export default Cart