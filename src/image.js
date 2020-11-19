import React, { Fragment,  useContext } from "react"
import "./App.css"

import {ImgContext} from "./imgContext"



function Image(props){

    const {cartImgUrl,handleCartImgUrl,removeCartImgUrl}=useContext(ImgContext)

    function handleClick(event){
        let iconParent;
        
        if(event.target.classList.contains("ri-heart-line")){

        iconParent =   event.target.parentElement;
        iconParent.innerHTML=`<i class="ri-heart-fill"></i>`}
        
        else if(event.target.classList.contains("ri-heart-fill")){
            iconParent =   event.target.parentElement;
            iconParent.innerHTML=`<i class="ri-heart-line"></i>`

        }
        else if(event.target.classList.contains("ri-add-circle-line")){

            iconParent =   event.target.parentElement;
            iconParent.innerHTML=`<i class="ri-shopping-cart-fill"></i>`
           // document.getElementById("main-cart").innerHTML = `<i class="ri-shopping-cart-fill"></i>`;
            handleCartImgUrl ( iconParent.parentElement.children[0].src)
         

        }else{
            iconParent =   event.target.parentElement;
            iconParent.innerHTML=`<i class="ri-add-circle-line"></i>`
            removeCartImgUrl(iconParent.parentElement.children[0].src)

        }
        iconParent.classList.remove("hide-icon")
        iconParent.classList.add("show-icon") 
        
   }

   function handleHover(event){
       event.target.parentElement.classList.add("show-icon");
   }


return(
<Fragment>

<img src={props.image} className="image"/>

<span className=" hide-icon heart" onClick={handleClick} onMouseOver={handleHover}><i className="ri-heart-line"></i></span>

<span className=" hide-icon add-cart" onClick={handleClick} onMouseOver={handleHover}><i className="ri-add-circle-line"></i></span>
</Fragment>)

}

export default Image