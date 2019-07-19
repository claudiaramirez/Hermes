import React, { Component } from 'react';
import HeaderLogin from './Components/header/HeaderLogin'; 
import HeaderApp from './Components/header/HeaderApp';
import Login from './Views/login'; 

import Home from './Components/Home/Home';
import SignUp from './Views/signup';
import Shipment_details from './Views/shipment_details/Shipment_details';

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
      <SignUp/>
      <HeaderApp/>
      <Login/>
      <Shipment_details />
    </div>
    
    );
  }
}

export default App;
