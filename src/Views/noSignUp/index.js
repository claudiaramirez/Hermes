import React, { Component } from 'react';
import logo from '../../assets/logo_white.png'; 
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import '../../Components/header/header.css'; 
import {data} from './data.js';

class noSignUp extends Component {
    constructor() {
        super(); 
        this.state = {
          data,
          guide_num: '',
          item: {},
        }
        this.filterByGuideNum = this.filterByGuideNum.bind(this); 
      };

    filterByGuideNum(){
        this.state.data.map((element)=>{
            if(this.state.guide_num === element.num_guia){
                this.setState({
                    item: element
                })
            } else if(this.state.guide_num !== element.num_guia){
                console.log('No funciona')
            }
        })
       
    }
        render() {

            const data1 = this.state.data.map((element)=>{
                if(element === this.state.item){
                    return (
                        <div key={element.id}>
                            <p>{element.num_guia}</p>
                            <p>Paquetería: {element.paqueteria}</p>
                            <p>{element.created_at}</p>
                            <p>Estatus: {element.estatus.estatus}</p>
                            <p>{element.estatus.descripcion}</p>
                        </div>
                    )
                }
            
            })

        return (
            <div>
                 <div className='header-login'>
                <Container>
                    <Row>
                        <Col xs={12}><img className="logo" src={logo}></img></Col>
                    </Row>
                </Container>    
            </div>
                <input placeholder="Buscar por número de guía" 
                value={this.state.guide_num} onChange={(event)=>{
                                    this.setState({
                                        guide_num: event.target.value
                                    })
                                }}></input>
                <button onClick={this.filterByGuideNum}>Consultar</button>
                <div>{data1}</div>
                <p>Para ver mas información <a href="www.google.com" target="_blank">registrate</a> o <a href="www.google.com" target="_blank">inicia sesión</a></p>
            </div>
        );
    }
}

export default noSignUp;