import React from "react"

function CheckoutGrid(props){

    function handleClick(event){

        event.target.parentElement.parentElement.remove();

    }

    return(
        <div className="checkout-grid">
                
        <div className="delete" onClick={handleClick}><i class="ri-delete-bin-line"></i></div>
        <div className="cart-img-div"><img className="cart-img" src={props.imgUrl}/></div>
        <div className="cart-price"><strong>$5.99</strong></div>
    </div> 
    )
}

export default CheckoutGrid;