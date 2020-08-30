import React, { Component } from 'react'
import * as ROUTES from '../../constants/routes';
import { Table, Space, Button, Divider, Row, Col } from 'antd';
import Axios from 'axios'

const columns = [
  {
    title: 'Pregunta',
    dataIndex: 'query',
    key: 'query'
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a href="">Editar</a>
        <a href="">Eliminar</a>
      </Space>
    ),
  },
];

export class Show extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }
  
  componentDidMount() {
    console.log(this.state.data)
    fetch(ROUTES.API_URL + '/quizzes/' + this.props.match.params.id, {
      method: 'GET'
    }).
    then(res => res.json()).
    then((result) => {
      console.error(result);
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
        <Row>
          <Col span={22} >
            <h1>
              { this.state.data.name }
            </h1>
          </Col>
          <Col >
            <Button href="/new_test" type="primary"> Clasificación </Button>
          </Col>
        </Row>

        <h3>
          Profesor: { this.state.data.professor ? this.state.data.professor.name : '' }
        </h3>
        <h3>
          Email: { this.state.data.professor ? this.state.data.professor.email : '' }
        </h3>
        <h2 style={{marginTop:"30px", marginBottom:"30px"}}>
          Preguntas:
        </h2>
        <h3>
          <Table columns={columns} dataSource={this.state.data.questions} />
        </h3>
      </div>
    )
  }
}

export default Show