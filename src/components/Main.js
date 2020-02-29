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
      <div className="pretextarea">
         <div className="textarea__item">
            <TextareaAutosize className="textarea" placeholder="Placholder"/>
         </div>
         <div className="textarea__item">
            <p className="textarea textarea__output">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam ratione odio blanditiis suscipit, error id, temporibus eius, nam magnam laudantium illum atque repudiandae fugiat incidunt quasi porro necessitatibus. Perferendis impedit tenetur nisi, deserunt sint, ipsa culpa saepe reiciendis enim molestiae, fuga officia officiis voluptatibus amet distinctio repudiandae. Voluptatum laudantium ullam nobis iste maxime rerum, non nisi repellendus tenetur magnam harum aut consequatur excepturi debitis sunt impedit atque expedita dolorum deleniti aspernatur maiores minus enim voluptatem! Dolor adipisci culpa placeat, voluptas reiciendis vel, quisquam soluta nihil minima aut ex. Optio ullam ad doloremque eaque, dicta quasi autem provident deleniti aliquid quaerat?
            </p>
         </div>
      </div>
    )
  }
}




export default Main