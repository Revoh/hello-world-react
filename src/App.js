import React, { Component } from 'react';
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
  constructor() {
    super();
    this.displayMsg = this.displayMsg.bind(this);
   }

  displayMsg = () => {
    return 'Hello World...!';
  }

  render(){
    const msg = this.displayMsg();

    return(
      <div>
        <h2>{msg}</h2>
      </div>
    );
  }
}


export default App;

