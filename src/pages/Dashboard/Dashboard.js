import React, { Component } from 'react';

import {
  Row,
  Spinner,
  Toast,
  ToastBody,
  ToastHeader,
} from 'react-bootstrap';

import * as cards from './cardIcons';

import {
  Placard,
  PlacardIcon,
  PlacardText,
} from '../../components/Placard';

import DataTable from '../../components/DataTable';
import Subheader from '../../components/Subheader';

// import { iconBiohazard } from '../../components/Icon/';
// import { iconThumbsUp } from '../../components/Icon/';
// import { iconClock } from '../../components/Icon/';
// import { iconHospital } from '../../components/Icon/';
// import { iconHospitalAlt } from '../../components/Icon/';
// import { iconProcedures } from '../../components/Icon/';
// import { iconBed } from '../../components/Icon/';
// import { iconLungsVirus } from '../../components/Icon/';
// import { iconLungs } from '../../components/Icon/';
// import { iconClipboardCheck } from '../../components/Icon/';
// import { iconTombstone } from '../../components/Icon/';
// import { iconHospitalUser } from '../../components/Icon/';
// import { iconSigma } from '../../components/Icon/';
// import { iconFilesMedical } from '../../components/Icon/';

import { Component as iconBiohazard } from '../../common/images/svg/biohazard.svg';
import { Component as iconThumbsUp } from '../../common/images/svg/thumbs-up.svg';
import { Component as iconClock } from '../../common/images/svg/clock.svg';
import { Component as iconHospital } from '../../common/images/svg/hospital.svg';
import { Component as iconHospitalAlt } from '../../common/images/svg/hospital-alt.svg';
import { Component as iconProcedures } from '../../common/images/svg/procedures.svg';
import { Component as iconBed } from '../../common/images/svg/bed.svg';
import { Component as iconLungsVirus } from '../../common/images/svg/lungs-virus.svg';
import { Component as iconLungs } from '../../common/images/svg/lungs.svg';
import { Component as iconClipboardCheck } from '../../common/images/svg/clipboard-check.svg';
import { Component as iconTombstone } from '../../common/images/svg/tombstone.svg';
import { Component as iconHospitalUser } from '../../common/images/svg/hospital-user.svg';
import { Component as iconSigma } from '../../common/images/svg/sigma.svg';
import { Component as iconFilesMedical } from '../../common/images/svg/files-medical.svg';

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
          <Placard icon="iconBiohazard">
            Placard label="Positive Tests" value="333747" 
          </Placard>
          <Placard icon="iconThumbsUp">
            Placard label="Negative Tests" value="1444740" 
          </Placard>
          <Placard icon="iconClock.svg">
            Placard label="Pending Tests" value="17368" 
          </Placard>
          <Placard icon="iconHospital.svg">
            Placard label="Hospitalized, Currently" value="23069" 
          </Placard>
          <Placard icon="iconHospital-alt.svg">
            Placard label="Hospitalized, Cumulative" value="41559" 
          </Placard>
          <Placard icon="iconProcedures.svg">
            Placard label="In ICU, Currently" value="5497" 
          </Placard>
          <Placard icon="iconBed.svg">
            Placard label="In ICU, Cumulative" value="922" 
          </Placard>
          <Placard icon="iconLungs-virus.svg">
            Placard label="On Ventilator, Currently" value="612" 
          </Placard>
          <Placard icon="iconLungs.svg">
            Placard label="On Ventilator, Cumulative" value="193" 
          </Placard>
          <Placard icon="iconClipboard-check.svg">
            Placard label="Recovered" value="14569" 
          </Placard>
          <Placard icon="iconTombstone.svg">
            Placard label="Deaths" value="9558" 
          </Placard>
          <Placard icon="iconHospital-user.svg">
            Placard label="Hospitalized" value="41559" 
          </Placard>
          <Placard icon="iconSigma.svg">
            Placard label="Total" value="1795855" 
          </Placard>
          <Placard icon="iconFiles-medical.svg">
            Placard label="Total Tests" value="1778487" 
          </Placard>
        </Row>
        <DataTable />
        {/* {data.map((card) => 
          <Placard label={card.title} value={card.value} icon={card.icon} />
        )} */}
      </>
    );  
  }
}

export default Dashboard;