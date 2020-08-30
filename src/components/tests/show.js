import React, { Component } from 'react'
import * as ROUTES from '../../constants/routes';
import { Table, Space, Button, Divider, Row, Col } from 'antd';
import Axios from 'axios'

var dataaa = [{
  "id": 1,
  "name": "Estructura de Datos Parcial 1",
  "professor_id": 1,
  "created_at": "2020-08-29T19:41:08.631-02:00",
  "updated_at": "2020-08-29T19:41:08.631-02:00",
  "questions": [
      {
          "id": 1,
          "query": "Cuantos Beagles hay en BeagleTown?",
          "option_a": "10",
          "option_b": "20",
          "option_c": "30",
          "option_d": "40",
          "correct_option": "1",
          "quiz_id": 1,
          "created_at": "2020-08-29T19:41:08.649-02:00",
          "updated_at": "2020-08-29T20:41:04.999-02:00"
      }
  ]
}]

export class Show extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }
  
  componentDidMount() {
    this.setState({data:
      dataaa
    })
    Axios.get(ROUTES.API_URL + '/quizzes/' + this.props.match.params.id).
    then(data => {
      console.log(data)
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
        <Row>
          <Col>
          <a>
          </a>
          </Col>
        </Row>
        <h1>
          { typeof(this.state.data["0"]) != 'undefined' ? this.state.data["0"].name : ''}
        </h1>
        <h3>

        </h3>
      </div>
    )
  }
}

export default Show