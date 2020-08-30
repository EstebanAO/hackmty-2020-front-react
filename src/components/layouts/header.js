import React, { Component } from 'react'
import { Layout, Menu, Link } from 'antd';

const { Header, Content, Footer } = Layout;

export class HeaderTag extends Component {
  render() {
    return (
      <div>
        { ['leaderboard', 'lobby', 'winner', 'question'].includes(this.props.path.split('/')[1]) ? '' :  
          <Header style={{zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal">
              <Menu.Item key="1">
                <a href="/">Inicio</a>
              </Menu.Item>
              <Menu.Item key="2">
                <a href="/tests">Exámenes</a>
              </Menu.Item>
              <Menu.Item key="3">
                <a href="/">ETC</a>
              </Menu.Item>
            </Menu>
          </Header>
        }
      </div>
    )
  }
}

export default HeaderTag