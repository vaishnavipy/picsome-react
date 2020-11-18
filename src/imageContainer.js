import React from "react"
import "./App.css"

import {useEffect,useState} from "react"
import Image from "./image"

function ImageContainer(){
let objectUrl; let images;
const [imagesURL,setImagesUrl] = useState([])
const [imgLoaded,setimgLoaded] = useState(false);



    useEffect(()=>{
        if(!imgLoaded){
       for(let i=0 ; i < 24 ; i++){

       
            fetch("https://picsum.photos/200/300.jpg")
            .then(response => response.blob())
            .then(image => {
                
                objectUrl = URL.createObjectURL(image)
                setImagesUrl(prevState => [...prevState,objectUrl])
                
            })
           // setCount(prevState => prevState+1)
          
        } }
       
   
    
     
    },[])

    useEffect(()=>{

        setTimeout(()=>{

            setimgLoaded(true)     
        },4000)


    })

   

    images = imagesURL.map((image,index) => {
    
    if(index % 5 == 0 ){
    
    return <div className="big" onMouseOver={handleHover} onMouseOut={handleOut}> 
   
                <Image image={image} />

            </div> }

    else if(index % 6 == 0){
        return  <div className="wide" onMouseOver={handleHover} onMouseOut={handleOut}>

                <Image image={image} />

            </div>
            }

    
    else {
        return <div className="tall" onMouseOver={handleHover} onMouseOut={handleOut}>
            
            <Image image={image} />
            
            </div>

    }
    

    })

    function handleHover(event){

     const children =  event.target.parentElement.children
    
        if(!likedImg){
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
}

    function handleOut(event){

        const children =  event.target.parentElement.children
        if(!likedImg){
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


       }
   

  
  
    return(
      
    <div className="image-container">
       
       {imgLoaded ? images : "Loading Images"}
      
    </div>)

}

export default ImageContainer;