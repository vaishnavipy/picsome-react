import React,{useContext, useEffect} from "react"
import {ImgContext} from "./imgContext"

function CheckoutGrid(props){

    const {cartImgUrl,handleCartImgUrl,removeCartImgUrl} = useContext(ImgContext)

    function handleClick(event){
        const parentId = event.target.parentElement.parentElement.id
        
       removeCartImgUrl(parentId)
        console.log(parentId)

    }

    return(
        <div className="checkout-grid" id={props.id}>
                
        <div className="delete" onClick={handleClick} ><i class="ri-delete-bin-line"></i></div>
        <div className="cart-img-div"><img className="cart-img" src={props.imgUrl}/></div>
        <div className="cart-price"><strong>$5.99</strong></div>
    </div> 
    )
}

export default CheckoutGrid;