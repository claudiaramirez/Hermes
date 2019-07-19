import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Shipment_details.css';
import PackageDetails from './Package_details';

import ShippingCompanyLogo from '../../assets/fedex_logo.png';



class Shipment_details extends Component {
    render() {
        return (
            <div className="card-format">
            <Card style={{ width: '21rem' }}>
            <Card.Body>
            <Card.Img variant="top" className="rounded-circle img-size" src={ShippingCompanyLogo}  />
            <Card.Title>Lacoste</Card.Title>
            <Card.Text>
              Guia: variableguia
            </Card.Text>
            <Card.Text>
            Entrega estimada: Date
          </Card.Text>
            <Card.Link href="#">Entregado</Card.Link>
            <PackageDetails />
          </Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Card>
            </div>
        );
    }
}

export default Shipment_details;