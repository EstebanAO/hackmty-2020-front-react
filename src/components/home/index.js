import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'
import Axios from 'axios'

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
    Axios.get('https://keobra.ukko.mx/api/v1/cities').
    then(data => {
      console.log(data)
    }).
    catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <p>Hola</p>
    )
  }
}

export default Index