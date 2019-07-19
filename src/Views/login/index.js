import React, { Component } from 'react';
import '../signup/signup.css'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



class Login extends Component {
    constructor(props){
        super(props)


    }
    submit(event){
        event.preventDefault();  

    }

    render() {
        return (
            <div className="signup font-weight-bold">
                <Form onSubmit={()=>this.props.history.push('./main')}>
                <Form.Group controlId="formBasicEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control className="input-signup" type="email" placeholder="Escribe tu nombre completo" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control className="input-signup" type="email" placeholder="ejemplo@correo.com" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control className="input-signup" type="password" placeholder="8-10 caracteres" />
                    </Form.Group>
                        <Button className="btn-signup" type="submit">Iniciar Sesión</Button>
                    </Form>
            </div>
        );
    }

}

export default Login;