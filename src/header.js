import React,{useContext} from "react";
import './App.css';
import {Link} from "react-router-dom"
import {ImgContext} from "./imgContext";


function Header(){
    const {cartImgUrl} = useContext(ImgContext)
    return(
        <div className="header">
        
           <Link to="/"><h1 className="logo">Pic Some</h1></Link>
           { console.log(cartImgUrl.length)}
          {cartImgUrl.length <= 0 ?
        
           <Link to="/cart"> <span className="header-cart" id="main-cart"><i class="ri-shopping-cart-line"></i></span></Link> 
           :
           <Link to="/cart"> <span className="header-cart" id="main-cart"><i class="ri-shopping-cart-fill"></i></span></Link> 
           
           } 
        </div>)
}

export default Header;