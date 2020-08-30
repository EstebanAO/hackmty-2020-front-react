import React, { Component } from 'react'
import { Row } from 'antd';

export class Index extends Component {
  constructor() {
    super()
    this.state = {
      data: {
        rows: []
      }
    }
  }
  
  componentDidMount() {
  }

  render() {
    return (
      <Row style={{margin: '15px'}}>
        <h1>
          Inicio
        </h1>
      </Row>
    )
  }
}

export default Index