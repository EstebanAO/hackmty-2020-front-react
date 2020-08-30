import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { Table, Space, Button, Row, Col } from 'antd';

import { ExportToCsv } from 'export-to-csv';

const fetch = require('node-fetch');

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    render: text => <span>{text}</span>,
  },
  {
    title: 'Fecha de cuestionario',
    dataIndex: 'created_at',
    key: 'created_at',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <Link onClick={() => {
            fetch(ROUTES.API_URL + '/quiz_sessions/' + record.quiz_id + '/results', {
                method: 'GET',
            }).
            then(res => res.json()).
            then((result) => {
                console.log(result)
                const options = { 
                    fieldSeparator: ',',
                    quoteStrings: '"',
                    decimalSeparator: '.',
                    filename: record.created_at,
                    showLabels: true, 
                    showTitle: true,
                    title: record.created_at,
                    useTextFile: false,
                    useBom: true,
                    useKeysAsHeaders: true,
                    // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
                };
                const csvExporter = new ExportToCsv(options);
                csvExporter.generateCsv(result);
            }).
            catch(function(err) {
                console.error(err);
            })
        }}>Descargar</Link>
        <Link>Ver</Link>
      </Space>
    ),
  },
];

export class Results extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }
  
  componentDidMount() {
    fetch(ROUTES.API_URL + '/quizzes/' + this.props.match.params.id, {
      method: 'GET',
    }).
    then(res => res.json()).
    then((result) => {
      this.setState({data: result.quiz_sessions})
      console.log(result)
    }).
    catch(function(err) {
      console.error(err);
    });
  }

  render() {
    return (
      <div style={{margin:"30px"}}>
        <Row style={{margin: '15px'}}>
          <Col span={22} >
            <h1>
               Resultados Pasados
            </h1>
          </Col>
          {/* <Col >
            <Button href="/new_test" type="primary" style={{backgroundColor: "#ffb800", "border": "#b87700"}} size="large"> Crear </Button>
          </Col> */}
        </Row>
        <Table columns={columns} dataSource={this.state.data} />
      </div>
    )
  }
}

export default Results