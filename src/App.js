import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dinfo from './Person/Person.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React DeMo with RAILS</h2>
        </div>
        <p className="App-intro">
          <div>
            <Dinfo name='Shree'/>
          </div>
        </p>
      </div>
    );
  }
}

export default App;

