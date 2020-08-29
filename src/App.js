import React from 'react';
import { Switch } from "react-router-dom"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css'

import HomePage from './components/home'
import TestIndex from './components/tests'
import HeaderTag from './components/layouts/header'



function App() {
  return (
    <div>
    <HeaderTag></HeaderTag>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/tests" component={TestIndex} />
      </Switch> 
    </Router>
    </div>
    
  );
}

export default App;
