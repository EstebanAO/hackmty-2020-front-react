import React, { Fragment } from 'react';
import { Switch } from "react-router-dom"
import * as ROUTES from './constants/routes';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout, Menu, Link } from 'antd';
import './App.css';
import 'antd/dist/antd.css'

import HomePage from './components/home'
import TestIndex from './components/tests'
import TestShow from './components/tests/show'
import HeaderTag from './components/layouts/header'
import TestNew from './components/tests/new'
import Question from './components/tests/question'

function App() {
  return (
    <div>
      <HeaderTag/>
      <Router >
          <Switch>
            <Route exact path={ROUTES.BASE} component={HomePage} />
            <Route exact path={ROUTES.TEST_INDEX} component={TestIndex} />
            <Route exact path={ROUTES.TEST_SHOW} component={TestShow} />
            <Route exact path={ROUTES.TEST_NEW} component={TestNew} />
            <Route exact path={ROUTES.QUESTION} component={Question} />
          </Switch>
        </Router>
    </div>
    
  );
}

export default App;
