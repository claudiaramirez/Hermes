import React, { Component } from 'react';
import HeaderLogin from './Components/header/HeaderLogin'; 
import HeaderApp from './Components/header/HeaderApp';
import Login from './Views/login'; 
import SignIn from './Views/signin';
import Home from './Components/Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
      <HeaderLogin/>
      <Login/>
      <SignIn/>
      <Home></Home>
    </div>
    
    );
  }
}

export default App;
