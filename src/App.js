import React, { Component } from 'react';
import app from './firebase/firebase';
import './App.css';
import Routes from './routes/route';


class App extends Component {
  
  render(){
  return (
    <div className="App">
    <Routes />
    </div>
  );
}
}
export default App;
