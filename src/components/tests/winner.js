import { rgb } from 'd3-color';
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { Row, Col, Button, Layout } from 'antd';
import Axios from 'axios'

import logo from '../../assets/img/beeready.png';
import winnerBee from '../../assets/img/beeready_winner.png'

const { Header, Footer, Sider, Content } = Layout;

const d3 = require("d3");

export class Winner extends Component {
    constructor() {
        super()
        this.state = {
            firstPlaceName: "1st Place",
            secondPlaceName: "2nd Place",
            thirdPlaceName: "3rd Place",
        }
      }
    componentDidMount() {
        fetch(ROUTES.API_URL + '/quizzes/' + this.props.match.params.id + '/leaderboard', {
            method: 'GET',
        }).
        then(res => res.json()).
        then((result) => {
            this.setState({data: result})
            console.log(result)
        }).
        catch(function(err) {
            console.error(err);
        });

        const width = 600;
        const height = 300;
        const svg = d3.select("#winner-svg").append("svg")
            .attr("viewBox", [0, 0, width, height])
            .append("g");
        
        const pick1 = Math.floor(Math.random() * 3);
        const firstPlaceRect = svg
            .append("rect")
            .attr("fill", "gray")
            .attr("width", 0)
            .attr("height", 50)
            .attr("x", 0)
            .attr("y", (pick1*100) + 25);
        const firstPlaceBee = svg
            .append('image')
            .attr('href', winnerBee)
            .attr('width', 100)
            .attr('height', 100)
            .attr("x", 0)
            .attr("y", pick1*100);
        const firstPlaceText = svg
            .append("text")
            .attr("width", 0)
            .attr("height", 50)
            .attr("x", 0)
            .attr("y", (pick1*100) + 25)
            .text(this.state.firstPlaceName);
        
        let pick2 = Math.floor(Math.random() * 3);
        while (pick1 == pick2) {
            pick2 = Math.floor(Math.random() * 3);
        }
        const secondPlaceRect = svg
            .append("rect")
            .attr("fill", "gray")
            .attr("width", 0)
            .attr("height", 50)
            .attr("x", 0)
            .attr("y", (pick2*100) + 25);
        const secondPlaceBee = svg
            .append('image')
            .attr('href', winnerBee)
            .attr('width', 80)
            .attr('height', 80)
            .attr("x", 0)
            .attr("y", pick2*100);
        const secondPlaceText = svg
            .append("text")
            .attr("width", 0)
            .attr("height", 50)
            .attr("x", 0)
            .attr("y", (pick2*100) + 25)
            .text(this.state.secondPlaceName);

        let pick3 = Math.floor(Math.random() * 3);
        while (pick3 == pick2 || pick3 == pick1) {
            pick3 = Math.floor(Math.random() * 3);
        }
        const thirdPlaceRect = svg
            .append("rect")
            .attr("fill", "gray")
            .attr("width", 0)
            .attr("height", 50)
            .attr("x", 0)
            .attr("y", (pick3 * 100) + 25);
        const thirdPlaceBee = svg
            .append('image')
            .attr('href', winnerBee)
            .attr('width', 60)
            .attr('height', 60)
            .attr("x", 0)
            .attr("y", (pick3*100)+15);
        const thirdPlaceText = svg
            .append("text")
            .attr("width", 0)
            .attr("height", 50)
            .attr("x", 0)
            .attr("y", (pick3*100) + 25)
            .text(this.state.thirdPlaceName);
        
        firstPlaceRect
            .transition().duration(2000).attr("width", 500)
            .transition().duration(300).attr("fill", rgb(255, 0, 0, 1))
        firstPlaceBee
            .transition().duration(2000).attr('x', 450)
        
        secondPlaceRect
            .transition().duration(2000).attr("width", (500/3) * 2)
            .transition().duration(300).attr("fill", rgb(0, 255, 0, 1))
        secondPlaceBee
            .transition().duration(2000).attr('x', ((500/3) * 2) - 20)
        
        thirdPlaceRect
            .transition().duration(2000).attr("width", 500/3)
            .transition().duration(300).attr("fill", rgb(0, 0, 255, 1))
        thirdPlaceBee
            .transition().duration(2000).attr('x', ((500/3) * 1) - 40)
    }

    render() { return (
        <div id="winner-svg"></div>
    )}
}

export default Winner