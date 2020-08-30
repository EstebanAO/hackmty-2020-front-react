import React, { Component } from 'react'
import * as ROUTES from '../../constants/routes';
import { Table, Space, Button, Row, Col } from 'antd';
const fetch = require('node-fetch');

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Professor Id',
    dataIndex: 'professor_id',
    key: 'professor_id',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a href="">Comenzar</a>
        <a href="">Crear</a>
        <a href="">Eliminar</a>
      </Space>
    ),
  },
];

export class Index extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }
  
  componentDidMount() {
    fetch(ROUTES.API_URL + '/quizzes', {
      method: 'GET',
      headers: { },
      mode: 'no-cors'
    }).
    then(res => res.json()).
    then(result => {
      console.log(result)
      // this.setState({data: 
      //   data
      // })
    }).catch(function(err) {
      console.error(err);
      console.error("ABC");
    });
  }

  render() {
    return (
      <div>
        <Row style={{margin: '15px'}} orientation="right">
          <Col offset = {22}>
            <Button href="/tests" type="primary"> Crear </Button>
          </Col>
        </Row>
        <Table columns={columns} dataSource={this.state.data} />
      </div>
    )
  }
}

export default Index