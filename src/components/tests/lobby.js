import React, { Component } from 'react'
import * as ROUTES from '../../constants/routes';
import { Row, Col, Button, Layout } from 'antd';
import Axios from 'axios'

import logo from '../../assets/img/beeready.png';

const { Header, Footer, Sider, Content } = Layout;

export class Lobby extends Component {
    constructor() {
      super()
      this.state = {
        students: [],
        studentsLength: 0
      }
    }
    
    componentDidMount() {
        Axios.get(ROUTES.API_URL + '/quizzes/' + this.props.match.params.id).
        then(data => {
            let studentsData = data.data.students;
            let students = []
            let i = 0;
            studentsData = [
                {username: "Alan"},
                {username: "Esteban"},
                {username: "Eduardo"},
                {username: "Erick"},
                {username: "René"},
            ]
            for (i = 0; i < studentsData.length; i+=1) {
                students.push(<Col
                    span={8}
                    key={i.toString()}
                    style={{
                        "textAlign": "center",
                        "font-family": 'Audiowide',
                        "font-size": "3em"
                    }}>{ studentsData[i].username}</Col>);
            }
            console.error(students);
            
            this.setState({
                studentsList: [students],
                studentsLength: studentsData.length
            })
        }).
        catch(err => {
            console.log(err)
        })
    }

    render() { return (
        <>
            <Layout>
                <Content style={{
                    "background": "white"
                }}>
                    <Row>
                        <Col span={24} style={{
                            "textAlign": "center",
                            "font-family": 'Audiowide',
                            "font-size": "3em",
                            "padding-left": "2em",
                            "padding-right": "2em",
                            "padding-top": "1.5em",
                            "padding-bottom": "1em"
                        }}>¡Manda SMS o llama al <b style={{"color": "#ffb800"}}>+19142299068</b> ahora!</Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Row>
                                <Col span={8} style={{
                                    "textAlign": "center",
                                    "verticalAlign": "middle",
                                    "font-family": 'Questrial, sans-serif',
                                    "font-size": "2em",
                                    "padding": "1em",
                                }}>{ this.state.studentsLength } Jugadores</Col>
                                <Col span={8} style={{
                                    "textAlign": "center",
                                    "font-family": 'Questrial, sans-serif',
                                    "font-size": "2em",
                                    "padding": "0em"
                                }}>
                                    <img src={logo} style={{
                                        width: "60%"
                                    }}></img>
                                </Col>
                                <Col span={8} style={{
                                    "textAlign": "center",
                                    "padding": "2em"
                                }}><Button type="primary" style={{
                                    "textAlign": "center",
                                    "verticalAlign": "middle",
                                    "font-family": 'Questrial, sans-serif',
                                    "font-size": "2em",
                                    "height": "2em"
                                }} block>¡Comenzar!</Button></Col>
                            </Row>
                            <Row>
                                { this.state.studentsList }
                            </Row>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </>
    )}
}

export default Lobby