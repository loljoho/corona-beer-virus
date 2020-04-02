import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Sidebar from './components/Sidebar';
import Subheader from './components/Subheader';

import Home from './pages/Home';
import States from './pages/States';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Wrapper>
          <Sidebar />
          <Subheader title="Dashboard" />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/states" component={States} />
          </Switch>
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
