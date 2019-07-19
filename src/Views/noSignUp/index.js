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
        }
        this.filterByGuideNum = this.filterByGuideNum.bind(this); 
      }

    filterByGuideNum(event){
        this.state.data.map((element)=>{
            if(this.state.guide_num ===element.num_guia){
                console.log(element)
            }
        })
       
    }
        render() {
            console.log(this.state)

            const data1 = this.state.data.map((element)=>{
                return (
                    <div key={element.id}>{element.id}</div>
                )
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