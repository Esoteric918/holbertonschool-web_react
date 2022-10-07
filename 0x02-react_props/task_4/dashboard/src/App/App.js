import React from 'react';
import logo from '../assets/holberton_logo.jpg';
import './App.css';
import Notifications from '../Notifications/Notifications'
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Notifications />
        <div className="App">
          <Header />
          <div className="App-body">
            <Login />
          </div>
          <div className="App-footer">
            <Footer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
