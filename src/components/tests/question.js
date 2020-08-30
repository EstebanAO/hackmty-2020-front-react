import React, { Component } from 'react'
import { Typography, Row, Col, Space } from 'antd'
import axios from 'axios'

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
    }
  }

  render() {
    return (
      <>
        <Row style={questionStyle}>
          <Col offset={6} span={12}>
            <Title style={{margin: '30px'}}>1. Cuando se fundo Microsoft?</Title>
          </Col>
        </Row>
        <Row>
          <Col offset={11} span={2}>
            <Title style={{marginTop: '30px', fontSize: '120px'}}>30</Title>
          </Col>
        </Row>
        <Row>
          <Col offset={2} span={9} style={{...optionStyle, ...optionAStyle}}>
            <Space direction="vertical">
              <Title level={1} style={optionTextStyle}>1</Title>
              <Title level={2} style={optionTextStyle}>Respuesta numero 1</Title>
            </Space>
          </Col>
          <Col offset={2} span={9} style={{...optionStyle, ...optionBStyle}}>
            <Space direction="vertical">
              <Title level={1} style={optionTextStyle}>2</Title>
              <Title level={2} style={optionTextStyle}>Respuesta numero 1</Title>
            </Space>
          </Col>
        </Row>
        <Row>
          <Col offset={2} span={9} style={{...optionStyle, ...optionCStyle}}>
            <Space direction="vertical">
              <Title level={1} style={optionTextStyle}>3</Title>
              <Title level={2} style={optionTextStyle}>Respuesta numero 1</Title>
            </Space>
          </Col>
          <Col offset={2} span={9} style={{...optionStyle, ...optionDStyle}}>
            <Space direction="vertical">
              <Title level={1} style={optionTextStyle}>4</Title>
              <Title level={2} style={optionTextStyle}>Respuesta numero 1</Title>
            </Space>
          </Col>
        </Row>
      </>
    )
  }
}

export default Question
