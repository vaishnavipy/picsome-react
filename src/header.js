import React from "react";
import './App.css';
import {Link} from "react-router-dom"

function Header(){
    return(
        <div className="header">
        
           <Link to="/"><h1 className="logo">Pic Some</h1></Link>
           <Link to="/cart"> <span className="header-cart" id="main-cart"><i class="ri-shopping-cart-line"></i></span></Link>
        </div>)
}

export default Header;