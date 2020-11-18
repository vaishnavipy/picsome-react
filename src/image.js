import React, { Fragment } from "react"
import "./App.css"



function Image(props){

    function handleClick(event){
        let iconParent;
        console.log(event.target)
        if(event.target.classList.contains("ri-heart-line")){

        iconParent =   event.target.parentElement;
        iconParent.innerHTML=`<i class="ri-heart-fill"></i>`}
        else{

            iconParent =   event.target.parentElement;
            iconParent.innerHTML=`<i class="ri-shopping-cart-fill"></i>`

        }
        iconParent.classList.remove("hide-icon")
        iconParent.classList.add("show-icon") 
        
   }


return(
<Fragment>

<img src={props.image} className="image"/>

<span className=" hide-icon heart" onClick={handleClick}><i className="ri-heart-line"></i></span>

<span className=" hide-icon add-cart" onClick={handleClick}><i className="ri-add-circle-line"></i></span>
</Fragment>)

}

export default Image