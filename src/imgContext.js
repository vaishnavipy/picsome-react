import React from "react";

const ImgContext = React.createContext();
import {useState} from "react"

function ImgContextProvider(props){
const [cartImgUrl,setCartImgUrl] = useState([]);

function handleCartImgUrl(imgUrl){
    setCartImgUrl(prevImg => [...prevImg,imgUrl]);
}

return(
<ImgContext.Provider value={{cartImgUrl,handleCartImgUrl}}>
{props.children}
</ImgContext.Provider>)

}
export  {ImgContextProvider,ImgContext}