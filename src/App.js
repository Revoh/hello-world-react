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
  render(){
    return(
      <div>
        <h2>Hello World..!</h2>
      </div>
    );
  }
}


export default App;
