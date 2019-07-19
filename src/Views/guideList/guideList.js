import React, { Component } from 'react';

import './GuideList.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import Icon_sig from '../../assets/icono_siguiente.png';

import { Lista_de_guia } from  '../../data/Lista_de_guia';


class GuideList extends Component {
   constructor(props){
       super(props);
       this.state ={
           Lista_de_guia,
           id: "",
       }
   }

    render() {
        const camino = this.state.Lista_de_guia.map((item, i) => {
      if ( item.estatus.estatus === "camino") {
            return(
            <Card  key={item.num_guia}>
            <Card.Body>
            <Card.Title>{item.tienda}</Card.Title>
            <Card.Text>
              {`Guía: ${item.num_guia}`}
            </Card.Text>
            <Card.Text>
             {`Entrega estimada: ${item.created_at}`}
             </Card.Text>
            <div><img onClick={()=>this.props.history.push('/detalle')} id={item.id} src={Icon_sig} alt="icono" className="icon_format"></img></div>
          </Card.Body>
        </Card>
           )}       
        });

const transito = this.state.Lista_de_guia.map((item, i) => {
    if ( item.estatus.estatus === "transito") {
        return(
                <Card  key={item.num_guia}>
                <Card.Body>
                <Card.Title>{item.tienda}</Card.Title>
                <Card.Text>
                  {`Guía: ${item.num_guia}`}
                </Card.Text>
                <Card.Text>
                 {`Entrega estimada: ${item.created_at}`}
                 </Card.Text>
                <div><img onClick={()=>this.props.history.push('/detalle')} id={item.id} src={Icon_sig} alt="icono" className="icon_format"></img></div>
              </Card.Body>
            </Card>
             )}       
        });

    const entregado = this.state.Lista_de_guia.map((item, i) => {
        if ( item.estatus.estatus === "entregado") {
            return(
                    <Card  key={item.num_guia}>
                    <Card.Body>
                    <Card.Title>{item.tienda}</Card.Title>
                    <Card.Text>
                      {`Guía: ${item.num_guia}`}
                    </Card.Text>
                    <Card.Text>
                     {`Entrega estimada: ${item.created_at}`}
                     </Card.Text>
                    <div><img onClick={()=>this.props.history.push('/detalle')} id={item.id} src={Icon_sig} alt="icono" className="icon_format"></img></div>
                  </Card.Body>
                </Card>
            )}       
        });


        return (
            <div>
            <Tabs defaultActiveKey="camino" transition={false} id="noanim-tab-example">
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

