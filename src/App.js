import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
=======
import D3Table from './d3-table/D3Table';
>>>>>>> 389af4e8e04b61b84da5485368b7fdb83d8c3d23

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
<<<<<<< HEAD
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
=======
        <div className="app-container">
          <D3Table />
        </div>
>>>>>>> 389af4e8e04b61b84da5485368b7fdb83d8c3d23
      </div>
    );
  }
}

export default App;
