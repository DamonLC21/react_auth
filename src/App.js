import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
const loginUrl = "http://localhost:3000/api/v1/login"
const profileUrl = "http://localhost:3000/api/v1/profile"

class App extends Component {
  render(){
    return (
      <div className="App">
        <Home />
        <Login />
      </div>
    );
  }
}

export default App;
