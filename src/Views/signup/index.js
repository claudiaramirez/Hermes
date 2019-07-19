import React, { Component } from 'react';
import './signup.css'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Home from '../../Components/Components-Router/Home';
import HeaderLogin from '../../Components/header/HeaderLogin';



class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
        }
        this.submit = this.submit.bind(this);
    };
     
    submit = (event) => {
        event.preventDefault();
        const user = this.state;
        console.log(user);
        this.props.history.push('./list'); 
/*      const url = ""
        let userRegister = fetch(url, {
            method: 'POST', 
            body: JSON.stringify(user), 
            headers:{
              'Content-Type': 'application/json'
        }}) */
    }; 

        render() {
        return (
            <div>
                <HeaderLogin props={this.props}></HeaderLogin>
                    <div className="signup font-weight-bold">
                        <Form onSubmit={this.submit}>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control value={this.state.name} onChange={(event)=>{
                                    this.setState({
                                        name: event.target.value
                                    })
                                }} className="input-signup" type="text" placeholder="Escribe tu nombre completo" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control value={this.state.email} onChange={(event)=>{
                                    this.setState({
                                        email: event.target.value
                                    })
                                }}className="input-signup" type="email" placeholder="ejemplo@correo.com" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control value={this.state.password} onChange={(event)=>{
                                    this.setState({
                                        password: event.target.value
                                    })
                                }} className="input-signup" type="password" placeholder="8-10 caracteres" />
                            </Form.Group>
                            <Form.Group controlId="formBasicChecbox">
                                <Form.Check className="check" type="checkbox" />
                                    <span>Acepto los <a className="link-terminos" target="_blank" href="">Términos y Condiciones</a></span> 
                            </Form.Group>

                            <Button variant="primary" type="submit" className="btn-signup" value={this.state}>Registrate</Button>
                        </Form>
                    </div>
            </div>
        );
    }
}

export default SignUp;
