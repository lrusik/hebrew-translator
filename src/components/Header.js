import React from 'react'
import "./css/Header.css"
import logo from './img/logo.png';

function Header(props) {
   return (
      <div className="header">
         <div className="container">
            <div className="header__nav">    
               <div className="header__logo">
                  <img className="header__img" src={logo} alt="Logo"/>  
                  <div className="header__text">Nikdat</div>
               </div>
               <span className="header__slogan">Hebrew translator with vowels</span>
            </div>
         </div>
      </div>
   )
}

export default Header