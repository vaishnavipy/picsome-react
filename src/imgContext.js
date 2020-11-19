import React from "react";
import {useState} from "react"

const ImgContext = React.createContext();


function ImgContextProvider(props){
const [cartImgUrl,setCartImgUrl] = useState([]);

function handleCartImgUrl(imgUrl){
    setCartImgUrl(prevImg => [...prevImg,imgUrl]);
}
function removeCartImgUrl(id){

    setCartImgUrl(prevArr => {
      return   prevArr.filter(url => url != id)
    })

}

function handleClearCart(){

    setCartImgUrl([])
}

return(
<ImgContext.Provider value={{cartImgUrl,handleCartImgUrl,removeCartImgUrl,handleClearCart}}>
{props.children}
</ImgContext.Provider>)

}
export  {ImgContextProvider,ImgContext}