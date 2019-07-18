import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import logo from '../../assets/logo_white.png'; 
import './header.css'; 
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class HeaderLogin extends Component {
    render() {
        return (
            <div className='header-login'>
                <Container>
                    <Row>
                        <Col xs={12}><img className="logo" src={logo}></img></Col>
                    </Row>
                    <Row>
                        <Col xs={6}>Ingresar</Col>
                        <Col xs={6}>Registrate</Col>
                    </Row>
                </Container>    
            </div>
        );
    }
}

export default HeaderLogin;