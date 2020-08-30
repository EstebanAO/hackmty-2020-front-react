import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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
        <Link to="/lobby/{{record.id}}" style={{color: "#b87700"}}>Comenzar</Link>
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
    }).
    then(res => res.json()).
    then((result) => {
      this.setState({data: result})
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
               Exámenes
            </h1>
          </Col>
          <Col >
            <Button href="/new_test" type="primary" style={{backgroundColor: "#ffb800", "border": "#b87700"}} size="large"> Crear </Button>
          </Col>
        </Row>
        <Table columns={columns} dataSource={this.state.data} />
      </div>
    )
  }
}

export default Index