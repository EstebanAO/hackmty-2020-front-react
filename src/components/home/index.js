import React, { Component } from 'react'
import { Doughnut, Bar } from 'react-chartjs-2';
import { Row, Col } from 'antd';

import logo from '../../assets/img/beeready.png';

const dataInternetConnection = {
	labels: [
		'Con televisión',
		'Sin televisión'
	],
	datasets: [{
		data: [89, 11],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

export class Index extends Component {
  constructor() {
    super()
    this.state = {
      data: {
        rows: []
      }
    }
  }
  
  componentDidMount() {
  }

  render() {
    return (
      <div style={{margin:"30px"}}>
        <Row style={{margin: '15px', "text-align": "center"}}>
          <img src={logo} style={{width: "320px", "text-align": "center", "margin": "auto"}}></img>
        </Row>
        <Row style={{margin: '15px'}}>
          <h1>
            Inicio
          </h1>
        </Row>
        <h2 style={{textAlign:'left', fontWeight: "bold", fontSize: '180%', margin:"15px", fontFamily: 'Questrial'}}>
            * Al rededor de 2.5 milones de estudiantes abandonaron sus estudios el curso pasado y se estima que 4 millones de alumnos abandonarán sus estudios en este ciclo escolar.
        </h2>
        <h2 style={{textAlign:'left', fontWeight: "bold", fontSize: '180%', margin:"15px", fontFamily: 'Questrial'}}>
            * 16 millones de hogares  no cuentan con conexión a internet.
        </h2>
        <h2 style={{textAlign:'left', fontWeight: "bold", fontSize: '180%', margin:"15px", fontFamily: 'Questrial'}}>
            * Según la ENDUTIH, se estima que el 75.1% de los mexicanos tienen acceso a la telefonía celular.
        </h2>
        <Row align={"middle"} justify={"center"}>
          <div style={{margin:"15px"}}>
            <h2 style={{ fontFamily: 'Questrial'}}>Familias con televisión en hogares rurales</h2>
            <Doughnut
              width={200}
              height={200}
              options={{ maintainAspectRatio: false }}
              data={dataInternetConnection}
            />
          </div>
        </Row>

      </div>
    )
  }
}

export default Index