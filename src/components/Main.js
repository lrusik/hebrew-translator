import React, { Component } from 'react'
import "./css/Main.css"
import TextareaAutosize from 'react-autosize-textarea';

export class Main extends Component {
   cmpb() {
      let textareas = document.querySelectorAll(".textarea")
      let txt1 = textareas[0]; 
      let txt2 = textareas[1];
      console.log(txt1.offsetHeight);
      console.log(txt2.offsetHeight);

      if(txt1.offsetHeight > txt2.offsetHeight) {
         console.log("1");
         txt2.style.height = txt1.style.height;
      } else {
         console.log("2");
         txt1.style.height = txt2.style.height;
      }
   }
   
   render() {
    return (
      <div>
         <div className="textarea-header">
            <div className="textarea-header__item">
               <div className="textarea-header__selector">Translate from
                  <div className="textarea-header__options">
                     <div className="textarea-header__option">Something</div>
                     <div className="textarea-header__option">Something else</div>
                     <div className="textarea-header__option">Something</div>
                  </div>
               </div>
               
            </div>
         </div>
         <div className="pretextarea">
            <div className="textarea__item">
               <TextareaAutosize className="textarea" placeholder="Type here"/>
            </div>
            <div className="textarea__item">
               <p className="textarea textarea__output"></p>
            </div>
         </div>
      </div>
    )
  }
}




export default Main