import React, { Component } from 'react'
import { Card, Col, Row } from 'antd';
import axios from 'axios'
import * as ROUTES from '../../constants/routes';

const columns = [
  {
    title: 'Nombre',
    dataIndex: 'username',
    key: 'name',
  },
  {
    title: 'Puntaje',
    dataIndex: 'total_points',
    key: 'points',
  },
];

export class Leaderboard extends Component {
  constructor() {
    super();
    this.state = {
      students: [
        {
            "id": 5,
            "username": "Rene",
            "identifier": "+5218110801708",
            "quiz_id": 1,
            "total_points": 800,
            "created_at": "2020-08-30T01:24:03.378Z",
            "updated_at": "2020-08-30T01:24:35.659Z"
        },
        {
            "id": 2,
            "username": "Esteban",
            "identifier": "+5218110801708",
            "quiz_id": 1,
            "total_points": 750,
            "created_at": "2020-08-30T01:23:04.904Z",
            "updated_at": "2020-08-30T01:23:31.823Z"
        },
        {
          "id": 3,
          "username": "Erick",
          "identifier": "+5218110801708",
          "quiz_id": 1,
          "total_points": 700,
          "created_at": "2020-08-30T01:23:04.904Z",
          "updated_at": "2020-08-30T01:23:31.823Z"
      },
      {
        "id": 4,
        "username": "Eduardo",
        "identifier": "+5218110801708",
        "quiz_id": 1,
        "total_points": 600,
        "created_at": "2020-08-30T01:23:04.904Z",
        "updated_at": "2020-08-30T01:23:31.823Z"
    },
    {
      "id": 5,
      "username": "Alan",
      "identifier": "+5218110801708",
      "quiz_id": 1,
      "total_points": 500,
      "created_at": "2020-08-30T01:23:04.904Z",
      "updated_at": "2020-08-30T01:23:31.823Z"
  }
      ]
    }
  }

  componentDidMount() {
    this.state.quiz_id = this.props.match.params.id
    this.populateStudents();
  }

  populateStudents() {
    fetch(ROUTES.API_URL + 'quizzes/' + this.props.match.params.id + '/leaderboard', {
      method: 'GET',
    }).
    then(res => res.json()).
    then((result) => {
      this.setState({ students: result.data.slice(0, 5)})
    }).
    catch(function(err) {
        console.error(err);
    })
  }

  render() {
    const students = this.state.students.map((s, i) => {
      return (
        <Row align={"middle"} justify={"center"}>
          <Card style={{ width: 700, textAlign:'center', margin:'10px', backgroundColor:'#ffb800'}}>
          <Row align={"middle"} justify={"center"}>
            <Col span={8} style={{textAlign:'left', fontWeight: "bold", fontSize: '200%', margin:"0px", fontFamily: 'Questrial'}}>{"#" + (i + 1) } </Col>
            <Col span={8} style={{textAlign:'center', fontWeight: "bold", fontSize: '200%', margin:"0px", fontFamily: 'Questrial'}}>{s.username}</Col>
            <Col span={8} style={{textAlign:'right', fontWeight: "bold", fontSize: '200%', margin:"0px", fontFamily: 'Questrial'}}>{s.total_points}</Col>
            </Row>
          </Card>
        </Row>
      )
    })

    return (
      <div>
        <p style={{ textAlign:'center', fontSize: '400%', margin:'30px', fontFamily: 'Audiowide'}}>
          Leaderboard
        </p>
        {students}
      </div>
    )
  }
}

export default Leaderboard;
