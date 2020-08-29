import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'

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