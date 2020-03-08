import React, { Component } from 'react'
import "./css/Main.css"
import TextareaAutosize from 'react-autosize-textarea';
import axios from 'axios';
import Langmenu from "./Langmenu.js";

class Main extends Component {
   
   constructor(props) {
      super(props);
      this.state = {
         language: "Detect language",
         code: ""
      };
   }
   
   translateRequest = () => {
      const txt = document.querySelector("#to_translate");
      const output = document.querySelector("#translated");
      const destURL = 'https://lrusifikator.com/translator/api';
      
      axios({
         method: 'post',
         url: destURL,
         data: {
            text: txt.value,
            lang: this.state.code
         }
      }).then((response) => {
         //console.log(response["data"]["text"]);
         output.innerText = response["data"]["text"];
      }, (error) => {
         console.log(error);
      });
   }

   showMenu() {
      document.querySelector(".langmenu").style.display = "block";
   }

   selectLang = (event) => {
      this.setState({
         language: event.target.innerText,
         code: event.target.getAttribute("code")
      });
      document.querySelector(".langmenu").style.display = "none";
   }

   render() {
      return (
         <div className="main container">
            <div className="textarea-header">
               <div className="textarea-header__item" >
                  <div className="textarea-header__selectorwrapper" onClick={this.showMenu}>
                     <div className="textarea-header__selector">{this.state.language}</div>
                  </div>
                  <Langmenu selectLang={this.selectLang} />
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
               <button className="translate-button" onClick={this.translateRequest}>Translate</button>
            </div>
         </div>
      )
   }
}

export default Main; 