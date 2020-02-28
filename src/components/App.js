import React, { Component } from 'react';
import './css/App.css';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <Main />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
