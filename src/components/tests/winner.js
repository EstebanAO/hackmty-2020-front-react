import { rgb } from 'd3-color';
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { Row, Col, Button, Layout } from 'antd';
import Axios from 'axios'

import logo from '../../assets/img/beeready.png';
import winnerBee from '../../assets/img/beeready_winner.png'

import track1 from '../../assets/music/track3.mp3';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import ConfettiGenerator from "confetti-js";

const { Header, Footer, Sider, Content } = Layout;

const d3 = require("d3");

export class Winner extends Component {
    constructor() {
        super()
        this.state = {
            firstPlaceName: "1st Place",
            secondPlaceName: "2nd Place",
            thirdPlaceName: "3rd Place",
            firstPlaceScore: 0,
            secondPlaceScore: 0,
            thirdPlaceScore: 0,
        }
      }
    componentDidMount() {
        fetch(ROUTES.API_URL + '/quizzes/' + this.props.match.params.id + '/leaderboard', {
            method: 'GET',
        }).
        then(res => res.json()).
        then((result) => {
            let first = "No player";
            let firstScore = 0;
            if (result.length >= 1) {
                first = result[0].username;
                firstScore = result[0].total_points;
            }
            let second = "No player";
            let secondScore = 0;
            if (result.length >= 2) {
                second = result[1].username;
                secondScore = result[1].total_points;
            }
            let third = "No player";
            let thirdScore = 0;
            if (result.length >= 3) {
                third = result[2].username;
                thirdScore = result[2].total_points;
            }

            this.setState({
                firstPlaceName: first,
                secondPlaceName: second,
                thirdPlaceName: third,
                firstPlaceScore: firstScore,
                secondPlaceScore: secondScore,
                thirdPlaceScore: thirdScore,
            })
        }).
        catch(function(err) {
            console.error(err);
        }).finally(() => {
            const width = 600;
            const height = 350;
            const svg = d3.select("#winner-svg").append("svg")
                .attr("viewBox", [0, 0, width, height])
                .append("g");
            
            const logoBee = svg
                .append('image')
                .attr('href', logo)
                .attr('width', 120)
                .attr('height', 120)
                .attr("x", 300 - 60)
                .attr("y", 0);
            
            const barsY = 100;
            
            const pick1 = Math.floor(Math.random() * 3);
            const firstPlaceRect = svg
                .append("rect")
                .attr("fill", "gray")
                .attr("width", 0)
                .attr("height", 50)
                .attr("x", 0)
                .attr("y", barsY + (pick1*75) + 25);
            const firstPlaceBee = svg
                .append('image')
                .attr('href', winnerBee)
                .attr('width', 80)
                .attr('height', 80)
                .attr("x", 0)
                .attr("y", barsY + (pick1*75));
            const firstPlaceText = svg
                .append("text")
                .attr("width", 0)
                .attr("height", 50)
                .attr("x", 0)
                .attr("y", barsY + (pick1*75) + 25)
                .text(this.state.firstPlaceName);
            const firstPlaceScoreText = svg
                .append("text")
                .attr("width", 0)
                .attr("height", 50)
                .attr("x", 0)
                .attr("y", barsY + (pick1*75) + 50)
                .attr("fill", rgb(0, 0, 0, 0))
                .text(this.state.firstPlaceScore);
            
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
                .attr("y", barsY + (pick2*75) + 25);
            const secondPlaceBee = svg
                .append('image')
                .attr('href', winnerBee)
                .attr('width', 80)
                .attr('height', 80)
                .attr("x", 0)
                .attr("y", barsY + (pick2*75));
            const secondPlaceText = svg
                .append("text")
                .attr("width", 0)
                .attr("height", 50)
                .attr("x", 0)
                .attr("y", barsY + (pick2*75) + 25)
                .text(this.state.secondPlaceName);
            const secondPlaceScoreText = svg
                .append("text")
                .attr("width", 0)
                .attr("height", 50)
                .attr("x", 0)
                .attr("y", barsY + (pick2*75) + 50)
                .attr("fill", rgb(0, 0, 0, 0))
                .text(this.state.secondPlaceScore);

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
                .attr("y", barsY + (pick3 * 75) + 25);
            const thirdPlaceBee = svg
                .append('image')
                .attr('href', winnerBee)
                .attr('width', 80)
                .attr('height', 80)
                .attr("x", 0)
                .attr("y", barsY + (pick3*75));
            const thirdPlaceText = svg
                .append("text")
                .attr("width", 0)
                .attr("height", 50)
                .attr("x", 0)
                .attr("y", barsY + (pick3*75) + 25)
                .text(this.state.thirdPlaceName);
            const thirdPlaceScoreText = svg
                .append("text")
                .attr("width", 0)
                .attr("height", 50)
                .attr("x", 0)
                .attr("y", barsY + (pick3*75) + 50)
                .attr("fill", rgb(0, 0, 0, 0))
                .text(this.state.thirdPlaceScore);
            
            firstPlaceRect
                .transition().duration(2000).attr("width", 500/3)
                .transition().duration(1000).attr("width", (500/3) * 2)
                .transition().duration(500).attr("width", 500)
                .transition().duration(300).attr("fill", rgb(255, 0, 0, 1))
            firstPlaceBee
                .transition().duration(2000).attr('x', ((500/3) * 1) - 40)
                .transition().duration(1000).attr('x', ((500/3) * 2) - 40)
                .transition().duration(500).attr('x', 450)
            firstPlaceScoreText
                .transition().duration(3500)
                .transition().duration(300).attr("fill", rgb(0, 0, 0, 1));
            
            secondPlaceRect
                .transition().duration(2000).attr("width", 500/3)
                .transition().duration(1000).attr("width", (500/3) * 2)
                .transition().duration(300).attr("fill", rgb(0, 255, 0, 1))
            secondPlaceBee
                .transition().duration(2000).attr('x', ((500/3) * 1) - 20)
                .transition().duration(1000).attr('x', ((500/3) * 2) - 20)
            secondPlaceScoreText
                .transition().duration(3500)
                .transition().duration(300).attr("fill", rgb(0, 0, 0, 1));
            
            thirdPlaceRect
                .transition().duration(2000).attr("width", 500/3)
                .transition().duration(300).attr("fill", rgb(0, 0, 255, 1))
            thirdPlaceBee
                .transition().duration(2000).attr('x', ((500/3) * 1) - 40)
            thirdPlaceScoreText
                .transition().duration(3500)
                .transition().duration(300).attr("fill", rgb(0, 0, 0, 1));
            
            setTimeout(() => {
                const confettiSettings = { target: 'my-canvas' };
                const confetti = new ConfettiGenerator(confettiSettings);
                confetti.render();
            }, 3500);
        })
    }

    render() { return (
        <>
            <div style={{"display": "none"}}>
            <AudioPlayer
                volume="0.1"
                autoPlay
                src={track1}
                onPlay={e => console.log("onPlay")}
                loop
                // other props here
            />
            </div>
            <Link to="/tests/"><Button type="primary" size="large">Go To Home</Button></Link>
            <canvas id="my-canvas" style={{position: "absolute"}}></canvas>
            <div id="winner-svg"></div>
        </>
    )}
}

export default Winner