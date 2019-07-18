import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import logo from '../../assets/logo_white.png'; 
import './header.css'; 


class HeaderLogin extends Component {
    render() {
        return (
            <div>
                    <img className="logo" src={logo}></img>
                    <Button variant="primary">hola</Button>
                
            </div>
        );
    }
}

export default HeaderLogin;