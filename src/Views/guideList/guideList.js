import React, { Component } from 'react';

import './GuideList.css';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Icon_sig from '../../assets/icono_siguiente.png';

import { Lista_de_guia } from  '../../data/Lista_de_guia';


class GuideList extends Component {
    constructor(){
        super();
        this.state ={
            Lista_de_guia
        }
    }
    render() {
        const camino = this.state.Lista_de_guia.map((item, i) => {
      if ( item.estatus.estatus == "camino") {
            return(
            <Card key={item.num_guia}>
            <Card.Body>
            <Card.Title>{item.tienda}</Card.Title>
            <Card.Text>
              {`Guía: ${item.num_guia}`}
            </Card.Text>
            <div><img id={item.id} src={Icon_sig} alt="icono" className="icon_format"></img></div>
          </Card.Body>
        </Card>
           )}       
        });

const transito = this.state.Lista_de_guia.map((item, i) => {
    if ( item.estatus.estatus == "transito") {
        return(
            <Card key={item.num_guia}>
            <Card.Body>
            <Card.Title>{item.tienda}</Card.Title>
            <Card.Text>
            {`Guía: ${item.num_guia}`}
            </Card.Text>
            <Button variant="primary" className="btn-signup">Detalles</Button>
            </Card.Body>
            </Card>
             )}       
        });

    const entregado = this.state.Lista_de_guia.map((item, i) => {
        if ( item.estatus.estatus == "entregado") {
            return(
            <Card key={item.num_guia}>
            <Card.Body className="card-format">
            <Card.Title className="title-format">{item.tienda}</Card.Title>
            <Card.Text className="title-format">
            {`Guía: ${item.num_guia}`}
            </Card.Text>
            <Button variant="primary">Detalles</Button>
            </Card.Body>
            </Card>
            )}       
        });


        return (
            <div>
            <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
            <Tab eventKey="camino" title="Camino" tabClassName='header_format'>
           {camino}
            </Tab>
            <Tab eventKey="transito" title="Transito" tabClassName='header_format'>
              {transito}
            </Tab>
            <Tab eventKey="entregado" title="Entregado" tabClassName='header_format'>
              {entregado}
            </Tab>
          </Tabs>
            </div>
        );

    }
}

export default GuideList;