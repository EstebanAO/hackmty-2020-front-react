import React, { Component } from 'react'
import { Table, Space, Button, Row, Col } from 'antd';
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
      students: [],
      quiz_id: undefined
    }
  }

  componentDidMount() {
    this.state.quiz_id = this.props.match.params.id
    this.populateStudents();
  }

  populateStudents() {
    axios.get(ROUTES.API_URL+ "/quizzes/" + this.state.quiz_id + "/leaderboard")
      .then(res => this.setState({ students: res.data}))
      .catch(err => console.log(err))
  }

  render() {
    const students = this.state.students.map((s, i) => {
      console.log(s)
    })

    return (
      <div>
        <Table columns={columns} dataSource={this.state.students} />
      </div>
    )
  }
}

export default Leaderboard;
