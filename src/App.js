import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <br/><br/><br/>
        <Hello/>
      </div>
    );
  }
}

class Hello extends Component {
  btnHello(){
    alert('Hello World!!');
  }

  render(){
    return(
      <div>
        <h2>Please click below button to alert 'Hello World!!!'</h2><br/>
        <button onClick={this.btnHello}>CLICK ME</button>
      </div>
    );
  }
}


export default App;
