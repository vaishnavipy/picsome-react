import React from "react";
import Image from "./image"
import {useState} from "react"

function ImageDiv(props){

    const [cartImgUrl,setCartImgUrl] = useState("");
  
    const ImgContext = React.createContext();

    function handleHover(event){

        const children =  event.target.parentElement.children
       
        
               for(let i=0 ;i < children.length;i++){
   
                   if(i !== 0){
                      if(children[i].innerHTML != `<i class="ri-heart-fill"></i>` ){
                       if(children[i].innerHTML != `<i class="ri-shopping-cart-fill"></i>`){
   
                       children[i].classList.remove("hide-icon")
                       children[i].classList.add("show-icon"); }
                   }
   
                   }
   
               }
           
   }
   
       function handleOut(event){
   
           const children =  event.target.parentElement.children
         
                  for(let i=0 ;i < children.length;i++){
      
                      if(i !== 0){
                       if(children[i].innerHTML != `<i class="ri-heart-fill"></i>` ){
                           if(children[i].innerHTML != `<i class="ri-shopping-cart-fill"></i>`){
                          children[i].classList.remove("show-icon")
                          children[i].classList.add("hide-icon");
                           }
      
                      }
                   }
      
                  }
               
          }
          function handleAddToCart(imageUrl){


            setCartImgUrl(imageUrl)
            
          }
      
   
     



    return(
        <div className={props.class} onMouseOver={handleHover} onMouseOut={handleOut}> 
           
                <Image image={props.image} handleAddToCart={handleAddToCart} />
          

            </div> 

    )
}

export default ImageDiv;