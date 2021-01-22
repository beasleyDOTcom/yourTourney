import React from 'react';
import './App.css';
import { subscribe } from './api.js';

export default class App extends React.Component{
  constructor(props) {
    super(props);
    subscribe((timestamp) => this.setState({
      timestamp
    }));
    this.state = {
      timestamp: 'no timestamp yet',
    };
  };

render(){
  return (
    <div className="App">
      <h1>hello tworld</h1>
      <button onClick={() => subscribe()}>start this</button>
      <p className="app-into">
        This is the timer value: {this.state.timestamp}
      </p>
    </div>
    );
  }
}
  