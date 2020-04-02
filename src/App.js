import React from 'react';
import './App.scss';

import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Sidebar from './components/Sidebar';
import Toolbar from './components/Toolbar';
import LineChart from './components/LineChart';
import DataTable from './components/DataTable';

function App() {
  return (
    <div className="App">
      <Header />
      <Wrapper>
        <Toolbar />
        <Sidebar />
        <LineChart />
        <DataTable />
      </Wrapper>
    </div>
  );
}

export default App;
