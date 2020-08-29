import React from 'react';
import { Switch } from "react-router-dom"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import HomePage from './components/home'
import TestIndex from './components/tests'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/tests" component={TestIndex} />
        </Switch> 
      </Router>
      </header>
    </div>
  );
}

export default App;
