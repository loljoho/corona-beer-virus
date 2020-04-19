import React from 'react';
import './Placard.scss';

import PlacardIcon from './PlacardIcon';
// import PlacardText from './PlacardText';

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
    // viewBox,
    // drawPath,
  } = props;
  return (
    <div className="placard col-xl-3 col-lg-4 col-sm-6 col-xs-12 mb-4">
      <Card className="border-left-primary whiteframe-z1 h-100 py-2">
        <Card.Body>
          <Row noGutters align-items-center="true">
            <Col>
              <PlacardIcon name={icon} /> 
              {/* viewBox={viewBox} drawPath={drawPath} /> */}
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
