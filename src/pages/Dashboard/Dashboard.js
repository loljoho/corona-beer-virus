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

import { getUSCurrent } from '../../common/scripts/CountryAPI';

import { dataCards } from './cards';

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
    getUSCurrent()
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
          {dataCards.map((card, i) => (
            <Placard key={i}
              icon={card.icon}
              label={card.label}
              value={isNaN(data[card.name]) ? data[card.name] : data[card.name].toLocaleString()} 
              name={card.name}
              viewBox={card.viewBox}
              path={card.path}
            />
          ))}
        </Row>
        <DataTable />
      </>
    );  
  }
}

export default Dashboard;