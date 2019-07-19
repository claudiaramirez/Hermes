import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Shipment_details.css';
import PackageDetails from './Package_details';
import ShippingCompanyLogo from '../../assets/fedex_logo.png';
import { detalle_guia } from "../../data/detalle_guia.js";
import Badge from 'react-bootstrap/Badge';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Timeline from 'react-time-line';



class Shipment_details extends Component {
  constructor() {
    super();
    this.state = {
      listaGuias: detalle_guia,
      id: "01guia",
    };
  }

  render() {

    const events = [
      {ts: "2017-09-17T12:22:46.587Z", text: 'Logged in'},
      {ts: "2017-09-17T12:21:46.587Z", text: 'Clicked Home Page'},
      {ts: "2017-09-17T12:20:46.587Z", text: 'Edited Profile'},
      {ts: "2017-09-16T12:22:46.587Z", text: 'Registred'},
      {ts: "2017-09-16T12:21:46.587Z", text: 'Clicked Cart'},
      {ts: "2017-09-16T12:20:46.587Z", text: 'Clicked Checkout'},
    ];
    
    return (
      <div className="card-format">
        <div>
          {
            this.state.listaGuias.map((value) => {
              return value.id == "01guia" ? (
                <div className="card-format">
                  <Card style={{ width: '21rem' }}>
                    <Card.Body>
                      <Card.Img variant="top" className="rounded-circle img-size" src={ShippingCompanyLogo} />
                      <Card.Title><span>{value.tienda}</span></Card.Title>
                      <Card.Text>Guía: {value.direccion_origen.num_guia}
                      </Card.Text>
                      <Card.Text>Entrega estimada: {value.fecha}
                      </Card.Text>
                      <Card.Link href="#"> <Badge variant="danger">{value.estatus}</Badge></Card.Link>

                    </Card.Body>
                    <Accordion>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Detalles del paquete &darr;
                           </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body><Timeline items={events} /></Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>

                  </Card>

                </div>
              ) : null
            }
            )
          }
        </div>
      </div>
    );
  }
}

export default Shipment_details;