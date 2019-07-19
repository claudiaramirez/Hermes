import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import './Shipment_details.css';
import ShippingCompanyLogo from '../../assets/dhl_logo.jpg';
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


    return (
      <div className="card-format">
        <div>
          {
            this.state.listaGuias.map((value,i) => {
              return value.id === "01guia" ? (
                <div key={value.id} className="card-format">
                  <Card  style={{ width: '21rem' }}>
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
                          <Card.Body>
                          <Timeline items={value.historia} />
                          </Card.Body>
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