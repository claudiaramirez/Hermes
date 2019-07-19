import React, { Component } from 'react';
import {
  Route,
  BrowserRouter,
  Link,
  Switch
}
  from "react-router-dom";
import NavContainer from "./Components/navContainer/NavContainer";
import './App.css'

class App extends Component {

  render() {
    return (
      <div className="App">
      
      <BrowserRouter>
      <div>
        <nav className="navbar-login">
          <ul className="header">
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/signup/" >Sign Up</Link>
            </li>
            <li>
              <Link to="/list/">En tránsito</Link>
            </li>
          </ul>
        </nav>

        <Switch>
        <NavContainer props={this.props.history}/>
        </Switch>
         
      </div>
    </BrowserRouter>
    </div>
    );
  }
}

export default App;
