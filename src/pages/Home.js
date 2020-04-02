import React, { Component } from 'react';

import LineChart from '../components/LineChart';
import DataTable from '../components/DataTable';

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    return (
      <> 
        <LineChart />
        <DataTable />
      </>
    );
  }
}

export default Home;
