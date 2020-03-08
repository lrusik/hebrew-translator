import React, { Component } from 'react'
import './css/App.css'
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"

//nikdat
class App extends Component {
  
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;