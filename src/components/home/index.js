import React, { Component } from 'react'
import { Table, Space, Tag, Button, Divider, Row, Col, Layout, Menu } from 'antd';
import Axios from 'axios'

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
    Axios.get('https://reqres.in/api/users?page=2').
    then(data => {
      console.log(data)
      var data = [{
        "key": '2',
        "name": "Adios",
        "professor_id": "1"
      }]
      this.setState({data: 
        data
      })
    }).
    catch(err => {
      console.log(err)
    })
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