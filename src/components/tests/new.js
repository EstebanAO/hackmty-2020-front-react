import React, { Component } from 'react'
import { Divider, Form, Input, Row, Col, Space, Button, Radio } from 'antd';
import axios from 'axios'

export class Index extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      questions: [],
    }
    this.handleChange = this.handleChange.bind(this)
    this.appendQuestion = this.appendQuestion.bind(this)
    this.uploadQuiz = this.uploadQuiz.bind(this)
  }

  uploadQuiz() {
    const data = {
      "name": this.state.name,
      "professor_id": 1,
      "questions_attributes": this.state.questions,
    }
    const body = JSON.stringify(data)
    console.log(body)
    axios.post("http://143d6d7c2dc5.ngrok.io/quizzes", data, { mode: 'no-cors' }
    ).then(res => console.log(res)
    ).catch(err =>
      console.log(err)
    )
  }

  appendQuestion() {
    const new_question = {
      query: "",
      correct_option: "1",
      option_a: "",
      option_b: "",
      option_c: "",
      option_d: "",
    }
    this.setState({
      name: this.state.name,
      questions: [...this.state.questions, new_question],
    })
  }

  handleChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleQuestion(event, i) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState(state => {
      const questions = state.questions.map((question, j) => {
        if (i === j) {
          question[name] = value
        }
        return question
      })
      return {
        "name": state.name,
        questions,
      }
    })
  }

  render() {
    const questions = this.state.questions.map((question, i) => {
      return (
        <>
          <Divider></Divider>
          <Row>
            <Col span={2} offset={5}>
              Pregunta {i + 1}
            </Col>
            <Col span={13}>
              <Input.TextArea
                size="medium"
                placeholder="Escribe una pregunta"
                name="query"
                value={this.state.questions[i].query}
                onChange={(event) => this.handleQuestion(event, i)}
              />
            </Col>
          </Row>
          <Row style={{marginTop: '15px'}}>
            <Col span={2} offset={5}>
              Selecciona la respuesta
            </Col>
            <Col>
              <Radio.Group
                name="correct_option"
                value={this.state.questions[i].correct_option}
                onChange={(event) => this.handleQuestion(event, i)}
              >
                <Radio.Button value="1">1</Radio.Button>
                <Radio.Button value="2">2</Radio.Button>
                <Radio.Button value="3">3</Radio.Button>
                <Radio.Button value="4">4</Radio.Button>
              </Radio.Group>
            </Col>
          </Row>
          <Row style={{marginTop: '15px'}}>
            <Col span={2} offset={5}>
              Opción 1
            </Col>
            <Col span={5}>
              <Input
                size="medium"
                placeholder="Escribe una respuesta"
                name="option_a"
                value={this.state.questions[i].option_a}
                onChange={(event) => this.handleQuestion(event, i)}
              />
            </Col>
            <Col span={2} offset={1}>
              Opción 2
            </Col>
            <Col span={5}>
              <Input
                size="medium"
                placeholder="Escribe una respuesta"
                name="option_b"
                value={this.state.questions[i].option_b}
                onChange={(event) => this.handleQuestion(event, i)}
              />
            </Col>
          </Row>
          <Row>
            <Col span={2} offset={5}>
              Opción 3
            </Col>
            <Col span={5}>
              <Input
                size="medium"
                placeholder="Escribe una respuesta"
                name="option_c"
                value={this.state.questions[i].option_c}
                onChange={(event) => this.handleQuestion(event, i)}
              />
            </Col>
            <Col span={2} offset={1}>
              Opción 4
            </Col>
            <Col span={5}>
              <Input
                size="medium"
                placeholder="Escribe una respuesta"
                name="option_d"
                value={this.state.questions[i].option_d}
                onChange={(event) => this.handleQuestion(event, i)}
              />
            </Col>
          </Row>
        </>
      )
    })
    return (
      <>
        <Row style={{margin: '15px'}}>
          <h1>
            Crear examen
          </h1>
        </Row>
        <Row>
          <Col offset={6} span={12}>
            <Input
              size="large"
              placeholder="Nombre del examen"
              name="name"
              value={this.state.name}
              style={{ marginTop: '10px' }}
              onChange={this.handleChange}
            />
          </Col>
        </Row>
        <Row style={{marginTop: '15px'}}>
          <Col span={6} offset={11}>
            <Button
              onClick={this.appendQuestion}
            >
              Agregar pregunta
            </Button>
          </Col>
        </Row>
        {questions}
        <Row style={{marginTop: '30px', marginBottom: '15px'}}>
          <Col span={6} offset={11}>
            <Button
              type="primary"
              onClick={this.uploadQuiz}
            >
              Subir cuestionario
            </Button>
          </Col>
        </Row>
      </>
    )
  }
}

export default Index
