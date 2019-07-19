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
/*   constructor(props) {
    super(props);
    this.state = {
      path: '',
    }
};

componentWillMount(){
  if(window.location.href.includes('/signup')){
    alert('hola')
  }
}; 
 */
  
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
