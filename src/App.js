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
  constructor(props){
    super(props)
  }

  render() {
    console.log(window.location.pathname)
    return (
      <div className="App">
      
      <BrowserRouter>
      <div>
        {window.location.pathname!= '/' && window.location.pathname!= '/signup' ?  
        <nav className="navbar-login">
          <ul className="header">
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/signup/">Sign Up</Link>
            </li>
            <li>
              <Link to="/list/">En tránsito</Link>
            </li>
            <li>
              <Link to="/detalle/">Detalle de Envío </Link>
            </li>
          </ul>
        </nav>
        : null}

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
