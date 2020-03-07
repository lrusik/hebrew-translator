import React, { Component } from 'react'
import "./css/Main.css"
import TextareaAutosize from 'react-autosize-textarea';
import axios from 'axios';

function translateRequest() {
   const txt = document.querySelector("#to_translate");
   const output = document.querySelector("#translated");
   const destURL = 'https://lrusifikator.com/translator/api';
   
   axios({
      method: 'post',
      url: destURL,
      data: {
         text: txt.value
      }
   }).then((response) => {
      //console.log(response["data"]["text"]);
      output.innerText = response["data"]["text"];
   }, (error) => {
      console.log(error);
   });
}


class Main extends Component {
   render() {
      return (
         <div className="main container">
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
               <div className="textareas">
                  <div className="textarea__item">
                     <TextareaAutosize className="textarea" id="to_translate" onChange={this.slog} placeholder="Type here"/>
                  </div>
                  <div className="textarea__item">
                     <p className="textarea textarea__output" id="translated"></p>
                  </div>
               </div>
               <button className="translate-button" onClick={translateRequest}>Translate</button>
            </div>
         </div>
      )
  }
}

export default Main;