import React from 'react';

import { Col } from 'react-bootstrap';

const PlacardText = (props) => {
  const { label, value } = props;
  return (
    <Col className="mr-2">
      <div className="text-xs text-break font-weight-bold text-primary text-uppercase mb-1">
        {label}
      </div>
      <div className="h5 mb-0 font-weight-bold text-gray-800">
        {value}
      </div>
    </Col>
  );
}

export default PlacardText;
