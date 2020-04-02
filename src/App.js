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
import Toolbar from './components/Toolbar';

import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Wrapper>
          <Toolbar />
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
