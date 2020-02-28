import React from 'react'
import "./css/Header.css"
import logo from './img/logo.png';

function Header(props) {
   return (
      <div className="header">
         <div className="container">
            <div className="header__nav">    
               <img className="header__logo" src={logo} alt="Logo"/>  
               <span className="header__slogan">Hebrew translator with vowels</span>
            </div>
         </div>
      </div>
   )
}

export default Header