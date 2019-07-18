import React, { Component } from 'react';
import {
    BrowserRouter,
    Link
  }
    from "react-router-dom";
  import NavContainer from "../navContainer/NavContainer"


class HeaderApp extends Component {
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
          
              <NavContainer/>
               
            </div>
          </BrowserRouter>
        );
    }
}

export default HeaderApp;