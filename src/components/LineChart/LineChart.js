import React, { Component } from 'react';
import './LineChart.scss';

import { Line } from 'react-chartjs-2';

export class LineChart extends Component {
  constructor(props) {
    super(props);
    this.chartReference = React.createRef();
  }

  componentDidMount() {
    console.log(this.chartReference); // returns a Chart.js instance reference
  }

  render() {

    // chart data 
    const data = canvas => {
      return {
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [
          {
            data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#007bff',
            borderWidth: 4,
            pointBackgroundColor: '#007bff'
          }
        ]
      };
    };

    // chart options
    const options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    };

    return <Line
      data={data} 
      height={380}
      width={900}
      options={options} 
    />;
  }
}

export default LineChart;
