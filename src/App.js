import React, { Component } from 'react';
import HeaderLogin from './Components/header/HeaderLogin'; 
import HeaderApp from './Components/header/HeaderApp';
import Login from './Views/login'; 

import Home from './Components/Home/Home';
import {
  Route,
  BrowserRouter,
  Link,
  Switch
}
  from "react-router-dom";
import NavContainer from "./Components/navContainer/NavContainer"


class App extends Component {

  render() {
    return (
      <div className="App">
      <BrowserRouter >
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/stuff/">About</Link>
            </li>
            <li>
              <Link to="/contact/">Users</Link>
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
