import React, { Component } from 'react';
import {
    Route,
  }
    from "react-router-dom";
  import Home from "../Components-Router/Home";
  import Stuff from "../Components-Router/Stuff";
  import Contact from "../Components-Router/Contact";


class NavContainer extends Component {
    render() {
        return (
            <div className="nav-container">
                 <Route path="/" exact component={Home} />
                <Route path="/stuff" component={Stuff} />
                <Route path="/contact" component={Contact} />
                
            </div>
        );
    }
}

export default NavContainer;