import React from "react"
import "./App.css"
import {useEffect,useState} from "react"
import ImageDiv from "./imageDiv"



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
    
    return <ImageDiv image={image} class="big"/> }

    else if(index % 6 == 0){
        return  <ImageDiv image={image} class="wide"/> }
            

    
    else {
        return  <ImageDiv image={image} class="tall"/>}
    

    })

   
    return(
      
    <div className="image-container">
       
       {imgLoaded ? images : "Loading Images"}
      
    </div>)

}

export default ImageContainer;