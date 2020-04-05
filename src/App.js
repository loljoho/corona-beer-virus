import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faAmbulance,
  faBong,
  faUserNinja,
  faFan,
  faPrescriptionBottle,
  faHeartbeat,
  faChessRook,
  faRadiation,
  faDragon,
  faPastafarianism,
  faHospital,
  faDizzy,
  faSkullCrossbones,
} from '@fortawesome/free-solid-svg-icons'

import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Sidebar from './components/Sidebar';
import Subheader from './components/Subheader';

import Dashboard from './pages/Dashboard';
import States from './pages/States';

library.add(
  faAmbulance,
  faBong,
  faUserNinja,
  faFan,
  faPrescriptionBottle,
  faHeartbeat,
  faChessRook,
  faRadiation,
  faDragon,
  faPastafarianism,
  faHospital,
  faDizzy,
  faSkullCrossbones,
);

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Wrapper>
          <Sidebar />
          <Subheader title="Overview · COVID-19" />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/states" component={States} />
          </Switch>
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
