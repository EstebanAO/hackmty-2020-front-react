import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/beeready_icon.png';

const { Header, Content, Footer } = Layout;

export class HeaderTag extends Component {
  render() {
    return (
      <div>
        { ['leaderboard', 'lobby', 'winner', 'question'].includes(this.props.path.split('/')[1]) ? '' :  
          <Header style={{zIndex: 1, width: '100%', "background-color": "#1890ff"}}>
            
            <Menu theme="dark" mode="horizontal" style={{"background-color": "#1890ff"}}>
              <Menu.Item key="0">
                <img src={logo}></img>
              </Menu.Item>
              <Menu.Item key="1">
                <Link to="/">Inicio</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/tests">Exámenes</Link>
              </Menu.Item>
            </Menu>
          </Header>
        }
      </div>
    )
  }
}

export default HeaderTag
