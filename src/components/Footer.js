import React from 'react'
import "./css/Footer.css"

function Footer(props) {
   return (
      <div className="footer">
         <p className="footer__title">Nikdat</p>
         <p className="footer__text">This is a non profitable website that uses <a href="https://translate.google.com/" className="footer__link">Google Translate</a> and <a href="https://nakdan.morfix.co.il/" className="footer__link">Nakdan Morfix</a>.
         </p>
      </div>
   )
}

export default Footer

