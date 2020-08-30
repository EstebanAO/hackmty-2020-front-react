import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { Row, Col, Button, Layout } from 'antd';
import Axios from 'axios'

import track1 from '../../assets/music/track1.mp3';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import logo from '../../assets/img/beeready.png';

const { Header, Footer, Sider, Content } = Layout;

export class Lobby extends Component {
    constructor() {
      super()
      this.state = {
        roomCode: 0,
        students: [],
        studentsLength: 0,
        questionRedirect: "",
      }
    }

    loadStudents(id_) {
        console.error("LOAD STUDENTS");
        Axios.get(ROUTES.API_URL + '/quizzes/' + id_).
        then(data => {
            let studentsData = data.data.students;
            let students = []
            let i = 0;
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
            
            this.setState({
                ['studentsList']: [students],
                ['studentsLength']: studentsData.length
            })
        }).
        catch(err => {
            console.log(err)
        })   
    }
    
    componentDidMount() {
        const data = {
            "exam_id": this.props.match.params.id,
            "num_questions": 0,
            "questions": [],
        }

        Axios.get(ROUTES.API_URL + '/quizzes/' + this.props.match.params.id + '/start').then(res => 
          console.log('Started quiz')
        ).catch(err =>
          console.log(err)
        )

        Axios.post(ROUTES.SERVER_URL + 'start', JSON.stringify(data), {
            headers: {
                // Overwrite Axios's automatically set Content-Type
                'Content-Type': 'application/json'
            }
        }).then(data => {
            this.setState({
                ['roomCode']: data.data.sms_id
            })
        }).catch(err => {
            console.log(err)
        })

        this.setState({
            ['questionRedirect']: '/question/' + this.props.match.params.id
        })

        this.loadStudents(this.props.match.params.id);
        let comp = this;
        setInterval(function(){
            comp.loadStudents(comp.props.match.params.id);
        }, 5000);
    }

    render() { return (
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
                        }}>¡Manda SMS o llama al <b style={{"color": "#ffb800"}}>+19142299068</b> ahora usando el PIN <b style={{"color": "#ffb800", "font-size": "2em"}}>{ this.state.roomCode }</b>!</Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Row>
                                <Col span={8} style={{
                                    "textAlign": "center",
                                    "verticalAlign": "middle",
                                    "font-family": 'Questrial, sans-serif',
                                    "font-size": "3em",
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
                                }}>
                                    <Link to={this.state.questionRedirect}>
                                        <Button type="primary" style={{
                                            "textAlign": "center",
                                            "verticalAlign": "middle",
                                            "font-family": 'Questrial, sans-serif',
                                            "font-size": "2em",
                                            "height": "2em"
                                        }} block>¡Comenzar!</Button>
                                    </Link>
                                </Col>
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
