import React, { Component } from 'react'
import { Typography, Row, Col, Space } from 'antd'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import track1 from '../../assets/music/track2.mp3';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import { API_URL } from '../../constants/routes'

const { Title } = Typography

const questionStyle = {
  backgroundColor: '#F3C366',
  borderBottomStyle: 'solid',
  borderBottomWidth: '1px',
  borderColor: '#302714',
}

const optionStyle = {
  padding: '10px',
  paddingLeft: '15px',
  height: '200px',
  backgroundColor: '#F3C366',
  borderStyle: 'solid',
  borderRadius: '5px',
  marginBottom: '50px',
}

const optionTextStyle = {
  color: 'white',
}

const optionAStyle = {
  backgroundColor: '#F00085',
  borderColor: '#90004F',
}

const optionBStyle = {
  backgroundColor: '#005EFF',
  borderColor: '#003899',
}

const optionCStyle = {
  backgroundColor: '#FFB400',
  borderColor: '#996C00',
}

const optionDStyle = {
  backgroundColor: '#00AD5A',
  borderColor: '#006736',
}

export class Question extends Component {
  constructor() {
    super()
    this.state = {
      go_to_leaderboard: false,
      is_test_done: false,
      countdown: 30,
      started_at_in_epoch: 0,
      query: "",
      option_a: "",
      option_b: "",
      option_c: "",
      option_d: "",
      correct_option: "",
      is_correct: [true, true, true, true],
    }
  }

  componentDidMount() {
    const quiz_id = this.props.match.params.id
    axios.get(API_URL + '/quizzes/' + quiz_id + '/next_question').then(res => {
      // Quiz is over
      if (res.status === 204) {
        this.setState({['is_test_done']: true})
        return
      }
      let data = res.data
      data['go_to_leaderboard'] = false
      data['is_test_done'] = false
      data['countdown'] = 30
      data['is_correct'] = [true, true, true, true]
      this.setState(data)
      this.interval = setInterval(() => {
        if (this.state.countdown !== 0) {
          this.setState({['countdown']: this.state.countdown - 1})
        } else {
          this.showCorrectAnswer()
        }
      }, 1000)
    }).catch(err =>
      console.log(err)
    )
  }

  showCorrectAnswer() {
    clearInterval(this.interval)
    const is_correct = []
    for (let i = 1; i <= 4; i++) {
      if (i === Number(this.state.correct_option)) {
        is_correct.push(true)
      } else {
        is_correct.push(false)
      }
    }
    setTimeout(() => {
      this.setState({['go_to_leaderboard']: true})
    }, 5000)
    this.setState({['is_correct']: is_correct})
  }

  render() {
    if (this.state.go_to_leaderboard) {
      return (
        <Redirect to={'/leaderboard/' + this.props.match.params.id} />
      )
    }
    if (this.state.is_test_done) {
      return (
        <Redirect to={'/winner/' + this.props.match.params.id} />
      )
    }
    return (
      <>
        <div style={{"display": "none"}}>
          <AudioPlayer
            autoPlay
            src={track1}
            onPlay={e => console.log("onPlay")}
            loop
            // other props here
          />
        </div>
        <Row style={questionStyle}>
          <Col offset={5} span={14}>
            <Title style={{textAlign: 'center', margin: '30px'}}>{this.state.query}</Title>
          </Col>
        </Row>
        <Row>
          <Col offset={9} span={6}>
            <Title style={{textAlign: 'center', marginTop: '30px', fontSize: '120px'}}>
              {this.state.countdown}
            </Title>
          </Col>
        </Row>
        <Row>
          <Col
            offset={2}
            span={9}
            style={{...optionStyle, ...optionAStyle, opacity: this.state.is_correct[0] ? 1 : 0.4}}
          >
            <Space direction="vertical">
              <Title level={1} style={optionTextStyle}>1</Title>
              <Title level={2} style={optionTextStyle}>{this.state.option_a}</Title>
            </Space>
          </Col>
          <Col
            offset={2}
            span={9}
            style={{...optionStyle, ...optionBStyle, opacity: this.state.is_correct[1] ? 1 : 0.4}}
          >
            <Space direction="vertical">
              <Title level={1} style={optionTextStyle}>2</Title>
              <Title level={2} style={optionTextStyle}>{this.state.option_b}</Title>
            </Space>
          </Col>
        </Row>
        <Row>
          <Col
            offset={2}
            span={9}
            style={{...optionStyle, ...optionCStyle, opacity: this.state.is_correct[2] ? 1 : 0.4}}
          >
            <Space direction="vertical">
              <Title level={1} style={optionTextStyle}>3</Title>
              <Title level={2} style={optionTextStyle}>{this.state.option_c}</Title>
            </Space>
          </Col>
          <Col
            offset={2}
            span={9}
            style={{...optionStyle, ...optionDStyle, opacity: this.state.is_correct[3] ? 1 : 0.4}}
          >
            <Space direction="vertical">
              <Title level={1} style={optionTextStyle}>4</Title>
              <Title level={2} style={optionTextStyle}>{this.state.option_d}</Title>
            </Space>
          </Col>
        </Row>
      </>
    )
  }
}

export default Question
