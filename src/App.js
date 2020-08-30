import React, { Fragment } from 'react';
import { Switch } from "react-router-dom"
import * as ROUTES from './constants/routes';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import history from './helpers/history'
import { Layout, Menu, Link } from 'antd';
import 'antd/dist/antd.css'
import './App.css';

import HomePage from './components/home'
import TestIndex from './components/tests'
import TestShow from './components/tests/show'
import HeaderTag from './components/layouts/header'
import Lobby from './components/tests/lobby'
import TestNew from './components/tests/new'
import TestLeaderboard from './components/tests/leaderboard'
import Question from './components/tests/question'
import Winner from './components/tests/winner';

function App() {
  return (
    <div>
      <HeaderTag path={history.location.pathname} />
      <Router >
        {console.log(history.location.pathname)}
          <Switch>
            <Route exact path={ROUTES.BASE} component={HomePage} />
            <Route exact path={ROUTES.TEST_INDEX} component={TestIndex} />
            <Route exact path={ROUTES.TEST_SHOW} component={TestShow} />
            <Route exact path={ROUTES.TEST_NEW} component={TestNew} />
            <Route exact path={ROUTES.TEST_LEADERBOARD} component={TestLeaderboard} />
            <Route exact path={ROUTES.QUESTION} component={Question} />
            <Route exact path={ROUTES.TEST_LOBBY} component={Lobby} />
            <Route exact path={ROUTES.WINNER} component={Winner} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
