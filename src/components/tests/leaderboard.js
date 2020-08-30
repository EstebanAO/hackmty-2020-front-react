import React, { Component } from 'react'
import { Card, Col, Row, Button } from 'antd';
import axios from 'axios'
import * as ROUTES from '../../constants/routes';

export class Leaderboard extends Component {
  constructor() {
    super();
    this.state = {
      students: []
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
        <Row align={"middle"}>
          <Col offset={8} span={8}>
            <p style={{ textAlign:'center', fontSize: '400%', margin:'30px', fontFamily: 'Audiowide'}}>
              Leaderboard
            </p>
          </Col>
          <Col offset={4} span={2} >
            <Button href={"/question/" + this.props.match.params.id } type="primary" style={{ backgroundColor: "#ffb800", "border": "#b87700"}} size="large"> Siguiente </Button>
          </Col>
        </Row>
        
        {students}
      </div>
    )
  }
}

export default Leaderboard;
