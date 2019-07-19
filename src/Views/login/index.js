import React, { Component } from 'react';
import '../signup/signup.css'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import HeaderLogin from '../../Components/header/HeaderLogin';
import UserLogin from '../../Components/data/registros';

class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            passSingIn:'',
            emailSingIn: '',
        }
        this.singIn = this.singIn.bind(this);
    }

    singIn(event){
        // event.preventDefault();
        // let findUser=undefined
        // UserLogin.forEach(item => {
        //     if(item.email==this.state.emailSingIn){
        //         if(item.pass==this.state.passSingIn){
        //             findUser=item
        //         }
        //     }
        // });

        // if(findUser){
        //     alert('OK');

        // }else{
        //     alert('usuaario no encontrado');
        // }

        // this.props.history.push('./list')
    }

    render() {
        return (
            <div>
                <HeaderLogin props={this.props}></HeaderLogin>
                <div className="signup font-weight-bold">

                    <Form onSubmit={this.singIn}>
                
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control value={this.state.emailSingIn} onChange={(event)=>{
                            this.setState({
                                emailSingIn: event.target.value 
                                })
                                console.log("email", this.state.emailSingIn)
                            }} className="input-signup" type="email" placeholder="ejemplo@correo.com" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control value={this.state.passSingIn} onChange={(event)=>{
                            this.setState({
                                passSingIn: event.target.value 
                                })
                                console.log("pass", this.state.passSingIn)
                            }}
                            className="input-signup" type="password" placeholder="8-10 caracteres" />
                        </Form.Group>
                            <p className="forgot-pass">Olvidaste tu contraseña</p>
                            <p>Recuperara ahora</p>
                            <Button className="btn-signup" type="submit">Iniciar Sesión</Button>
                        </Form>
                </div>
            </div>
        );
    }
}
export default Login;