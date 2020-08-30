import React, { Component } from 'react'
import { Layout, Menu, Link } from 'antd';

const { Header, Content, Footer } = Layout;

export class HeaderTag extends Component {
  render() {
    return (
      <div>
        { ['leaderboard', 'lobby', 'winner'].includes(this.props.path.split('/')[1]) ? '' :  
          <Header style={{zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">Inicio</Menu.Item>
              <Menu.Item key="2">Exámenes</Menu.Item>
              <Menu.Item key="3">Profesores</Menu.Item>
            </Menu>
          </Header>
        }
      </div>
    )
  }
}

export default HeaderTag