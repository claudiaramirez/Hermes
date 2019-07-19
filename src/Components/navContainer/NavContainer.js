import React, { Component } from 'react';
import {
    Route,
  }
    from "react-router-dom";
  import Login from "../../Views/login/index";
  import GuideList from "../../Views/guideList/guideList";
  import Signup from "../../Views/signup/index"


class NavContainer extends Component {
    render() {
        return (
            <div className="nav-container">
                 <Route path="/" exact component={Login} />
                 <Route path="/signup"  component={Signup} />
                <Route path="/list" component={GuideList} />
                <Route path="/detalle" component={GuideList} />
              
            </div>
        );
    }
}

export default NavContainer;