import React from 'react';
import './Placard.scss';

import PlacardIcon from './PlacardIcon';
// import PlacardText from './PlacardText';

import * as icons from '../../common/scripts/icons';

import { 
  Row,
  Col,
  Card,
} from 'react-bootstrap';

const Placard = (props) => {
  const { 
    label,
    value,
    icon,
    viewBox,
    drawPath,
  } = props;
  return (
    <div className="placard col-xl-3 col-lg-4 col-sm-6 col-xs-12 mb-4">
      <Card className="border-left-primary whiteframe-z1 h-100 py-2">
        <Card.Body>
          <Row noGutters align-items-center="true">
            <Col>
              <PlacardIcon name={icon} viewBox={viewBox} drawPath={drawPath} />
              {/* <svg className="icon" viewBox="0 0 496 512">
                <path d="M248 8C111.04 8 0 119.03 0 256s111.04 248 248 248 248-111.03 248-248S384.96 8 248 8zm0 32c18.88 0 37.09 2.68 54.55 7.25l-51.93 43.78c-7.12 4.72-11.19 12.94-10.69 21.44.53 8.53 5.62 16.19 13.25 20.02l10.81 5.41v64.19c-1.75-.55-3.56-.88-5.44-.94-7.12 0-14.47 3.56-18.25 9.91L222.62 240c-8.53 0-16.59 3.33-22.62 9.38l-5.66 5.66c-4.53 4.53-7.03 10.56-7.03 16.97s2.5 12.44 7.03 16.97l5.66 5.66V304h-22.12l-22.59-45.23a23.997 23.997 0 0 0-17.66-12.95c-7.38-1.23-15.38 1.28-20.78 6.72L97.38 272H32.81c-.39-5.3-.81-10.6-.81-16 0-119.1 96.9-216 216-216zM37.56 304h59.81c8.53 0 16.59-3.33 22.62-9.38l11.62-11.61 17.62 35.31c5.47 10.91 16.44 17.67 28.62 17.67H200c17.66 0 32-14.36 32-32v-9.38c0-8.34-3.34-16.53-9.22-22.47l.16-.16c11.19 0 21.72-5.97 27.44-15.53l10.84-18.06c3.16 1.03 6.75 1.59 10.78 1.59 13.22 0 24-10.77 24-24v-78.11c0-12.16-6.72-23.09-17.56-28.56l59.07-49.67C412.01 93.76 464 168.84 464 256c0 22.71-3.57 44.58-10.09 65.16-1.32-1.77-2.38-3.7-3.96-5.29l-4.88-4.88V308c0-19.85-16.15-36-36-36H403c-5.5 0-10.79 1.27-15.55 3.57a40.04 40.04 0 0 0-16.56-3.57H358.8c-8.37 0-16.39 2.57-23.21 7.42l-23.72 16.9-38.25 15.14c-15.28 6.11-25.14 20.69-25.14 37.14v10.21c0 10.68 4.16 20.73 11.71 28.28L272.11 399c9.06 9.06 21.12 14.06 33.94 14.06h10.34c3.92 0 7.84-.48 11.64-1.43l18.39-4.6 10.91 10.91c5.38 5.38 11.89 9.13 18.93 11.45C340.34 456.03 296.06 472 248 472c-102.59 0-188.53-71.95-210.44-168zM409 399.49c-.87.14-1.68.51-2.57.51h-15.16c-4.24 0-8.31-1.69-11.31-4.69l-13.01-13.01a26.78 26.78 0 0 0-25.42-7.04l-21.27 5.32c-1.27.32-2.57.48-3.88.48h-10.34c-4.24 0-8.31-1.69-11.31-4.69l-11.91-11.91a8.008 8.008 0 0 1-2.34-5.66v-10.2c0-3.27 1.99-6.21 5.03-7.43l39.34-15.74c1.98-.79 3.86-1.82 5.59-3.05l23.71-16.89a8.05 8.05 0 0 1 4.64-1.48h12.09c3.23 0 6.15 1.94 7.39 4.93l5.35 12.85a4 4 0 0 0 3.69 2.46h3.8c1.78 0 3.35-1.17 3.84-2.88l4.2-14.47c.5-1.71 2.06-2.88 3.84-2.88h6.06c2.21 0 4 1.79 4 4v12.93c0 2.12.84 4.16 2.34 5.66l11.91 11.91c3 3 4.69 7.07 4.69 11.31v18.75A216.64 216.64 0 0 1 409 399.49z" />
              </svg> */}
            </Col>
            <Col className="mr-2">
              <div className="text-xs text-break font-weight-bold text-primary text-uppercase mb-1">
                {label}
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                {value}
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Placard;
