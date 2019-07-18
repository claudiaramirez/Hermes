import React, { Component } from 'react';
import HeaderLogin from './Components/header/HeaderLogin'; 
import HeaderApp from './Components/header/HeaderApp';
import Login from './Views/login'; 

import Home from './Components/Home/Home';
import SignUp from './Views/signup';


class App extends Component {
  state = {
    loginSuccess: "false",
  }

    loginEvent = event => {
      this.setState({
        loginSuccess: true
      });
    };


  render() {
    return (
      <div className="App">
      <HeaderLogin/>
      <Login/>
      <SignUp/>
    
    </div>
    
    );
  }
}

export default App;
