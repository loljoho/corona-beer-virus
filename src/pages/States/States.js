import React, { Component } from 'react';

import { 
  Spinner,
  Toast,
  ToastBody,
  ToastHeader,
} from 'react-bootstrap';

import LineChart from '../../components/LineChart';
import DataTable from '../../components/DataTable';
import Subheader from '../../components/Subheader';

class States extends Component {
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
    fetch(`https://covidtracking.com/api/states`)
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
          data: data
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
    if (!error && !isLoading) {
      console.log(data);
    }
    return (
      <> 
        <Subheader heading="Current" subheading="States" />
        <LineChart />
        <DataTable />
      </>
    );  
  }
}

export default States;
