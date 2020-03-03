import React, { Component } from 'react'
import './css/App.css'
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"

//nikdat
class App extends Component {
  
  render() {
    return (
      <div className="content">
        <Header />
        <div className="container">
          <Main />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;