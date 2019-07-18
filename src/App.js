import React, { Component } from 'react';
import {
  Router,
  Route,
  BrowserRouter,
  Link
}
  from "react-router-dom";
import Home from "./Components-Router/Home";
import Stuff from "./Components-Router/Stuff";
import Contact from "./Components-Router/Contact";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/stuff/">About</Link>
              </li>
              <li>
                <Link to="/contact/">Users</Link>
              </li>
            </ul>
          </nav>
          <h1>Navigation</h1>
          <div className="content">
            <Route path="/" exact component={Home} />
            <Route path="/stuff" component={Stuff} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
