import React, { Component } from 'react';

import { getStatesCurrent } from '../../utils/API';

import LineChart from '../../components/LineChart';
import DataTable from '../../components/DataTable';

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    return (
      <> 
        <h1>Home</h1>
        <LineChart />
        <DataTable />
      </>
    );
  }
}

export default Home;
