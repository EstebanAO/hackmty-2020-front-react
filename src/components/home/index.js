import React, { Component } from 'react'

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
      <p>Hola</p>
    )
  }
}

export default Index