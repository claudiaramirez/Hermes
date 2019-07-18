import React, { Component } from 'react';
import './signup.css'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Home from '../../Components/Components-Router/Home';


class SignUp extends Component {
    state = {
        SignUpSuccess: false,
      };

      SingUpEvent(e) {
          e.preventDefault();
        const status = this.state.SignUpSuccess
        this.setState({ status: true });
      }

    render() {
  
        return(
            <div md={10} className="signup">
                <Form>
                <Form.Group controlId="formBasicEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="email" placeholder="Escribe tu nombre completo" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="ejemplo@correo.com" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="8-10 caracteres" />
                    </Form.Group>
                    <Form.Group controlId="formBasicChecbox">
                        <Form.Check type="checkbox" label="Acepto los Terminos y Condiciones" />
                    </Form.Group>
                    <Button variant="primary" type="submit" onSubmit={this.SingUpEvent}>Registrate</Button>
                    </Form>
            </div>
        );
    }
}

export default SignUp;