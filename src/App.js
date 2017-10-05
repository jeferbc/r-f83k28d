import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.increment = this.increment.bind(this)
    this.state = {
      counter: 0
    }
  }

  increment(){
    this.setState({
      counter: this.state.counter + 1
    })
  }
  render() {
    return (
      <div>
        <span className="value">{this.state.counter}</span>
        <button id="inc" onClick={this.increment}>Incrementa</button>
      </div>
    );
  }
}

export default App;
