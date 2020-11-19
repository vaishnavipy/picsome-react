import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'remixicon/fonts/remixicon.css'
import {BrowserRouter as Router} from "react-router-dom";
import {ImgContextProvider } from "./imgContext"



ReactDOM.render(

  <Router>
   <ImgContextProvider>  
    <App />
   </ImgContextProvider>
  </Router>
 ,
  document.getElementById('root')
);


