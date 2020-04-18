import React, { Component } from 'react';

import {
  Row,
  Spinner,
  Toast,
  ToastBody,
  ToastHeader,
} from 'react-bootstrap';

import {
  Placard,
} from '../../components/Placard';

import DataTable from '../../components/DataTable';
import Subheader from '../../components/Subheader';

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
    // US Current
    fetch(`https://covidtracking.com/api/v1/us/current.json`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => {
        this.setState({
          isLoading: false,
          data: data[0],  // cards
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
        <Subheader heading="Current" subheading="United States" />
        <Row className="d-sm-flex align-items-stretch justify-content-between mb-4">
          <Placard icon="biohazard" label="Positive Tests" value="333747"></Placard>
          <Placard icon="thumbsUp" label="Negative Tests" value="1444740"></Placard>
          <Placard icon="clock" label="Pending Tests" value="17368"></Placard>
          <Placard icon="hospital" label="Hospitalized, Currently" value="23069"></Placard>
          <Placard icon="hospitalAlt" label="Hospitalized, Cumulative" value="41559"></Placard>
          <Placard icon="procedures" label="In ICU, Currently" value="5497"></Placard>
          <Placard icon="bed" label="In ICU, Cumulative" value="922"></Placard>
          <Placard icon="lungsVirus" label="On Ventilator, Currently" value="612"></Placard>
          <Placard icon="lungs" label="On Ventilator, Cumulative" value="193"></Placard>
          <Placard icon="clipboardCheck" label="Recovered" value="14569"></Placard>
          <Placard icon="tombstone" label="Deaths" value="9558"></Placard>
          <Placard icon="hospitalUser" label="Hospitalized" value="41559"></Placard>
          <Placard icon="sigma" label="Total" value="1795855"></Placard>
          <Placard icon="filesMedical" label="Total Tests" value="1778487"></Placard>
        </Row>
        <DataTable />
        {/* {data.map((card) => <Placard label={card.title} value={card.value} icon={card.icon} />)} */}
      </>
    );  
  }
}

export default Dashboard;