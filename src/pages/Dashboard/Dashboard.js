import React, { Component } from 'react';

import {
  Row,
  Spinner,
  Toast,
  ToastBody,
  ToastHeader,
} from 'react-bootstrap';

import Placard from '../../components/Placard';
import DataTable from '../../components/DataTable';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoading: false,
      data: [],
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    this.setState({ isLoading: true });
    fetch(`https://covidtracking.com/api/us`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => {
        console.log(data[0]);
        this.setState({
          isLoading: false,
          data: data[0]
        });
      })
      .catch(error => {
        this.setState({
          isLoading: false,
          error
        });
      });
  }

  render() {
    const { error, isLoading, data } = this.state;
    if (error) {
      return (
        <div className="p-3 bg-danger my-2 rounded">
          <Toast>
            <ToastHeader>
              Failed to load data
            </ToastHeader>
            <ToastBody>
              {error}
            </ToastBody>
          </Toast>
        </div>
      );
    } 
    if (isLoading) {
      return (
        <Spinner type="grow" color="primary" />
      );
    }
    console.log(data);
    return (
      <> 
        <Row className="d-sm-flex align-items-stretch justify-content-between mb-4">
          <Placard label="Too Much Marijuanas" value="1,234.5" icon="bong" />
          <Placard label="Ninja Ambush" value="22" icon="user-ninja" />
          <Placard label="Fan Death" value="1,991,511" icon="fan" />
          <Placard label="Drug Overdose" value="8,230,111" icon="prescription-bottle" />
          <Placard label="Broken Heart" value="381" icon="heartbeat" />
          <Placard label="Defenestration" value="666" icon="chess-rook" />
          <Placard label="Radiation" value="1,920" icon="radiation" />
          <Placard label="Dragon Attack" value="399,106" icon="dragon" />
          <Placard label="Flying Spaghetti Monster" value="1,040" icon="pastafarianism" />
          <Placard label="Current Hospitalisations" value="77,197" icon="hospital" />
          <Placard label="Average Mortality Rate" value="360%" icon="dizzy" />
          <Placard label="Total Deaths" value="42" icon="skull-crossbones" />
        </Row>
        <DataTable />
      </>
    );  
  }
}

export default Dashboard;