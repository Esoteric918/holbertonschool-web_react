import React, { Component } from "react";
import logo from "./logo.jpg";
import "./App.css";
import { getFullYear, getFooterCopy } from "./utils";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Holberton dashboard</h2>
        </header>
        <body className="App-body">
          <p>Login to access the full dashboard</p>
          <label htmlFor="email" onClick={
            document.getElementById("email").focus()
          }>Email:

            <input type="email" id="email" name="email" />
          </label>
          <label htmlFor="password" onClick={
            document.getElementById("password").focus()
          }>Password:

            <input type="password" id="password" name="password" />
          </label>
          <button>OK</button>
        </body>
        <footer className="App-footer">
          <p>
            Copyright {getFullYear()} - {getFooterCopy(true)}
          </p>
        </footer>
      </div>
    );
  }
}
