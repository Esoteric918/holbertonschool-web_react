import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Holberton dashboard</h2>
        </header>
        <body className='App-body'>
          <p>Login to access the full dashboard</p>

        </body>
        <footer className='App-footer'>
          <p>Copyright 2020 - Holberton School</p>
        </footer>
      </div>
    );
  }
}
