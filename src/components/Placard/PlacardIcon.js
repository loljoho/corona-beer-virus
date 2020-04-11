import React from 'react';

import { Col } from 'react-bootstrap';

const PlacardIcon = (props) => {
  const { viewBox, drawPath } = props;
  return (
    <Col>
      <svg className="icon" viewBox={viewBox}>
        <path d={drawPath} />
      </svg>
    </Col>
  );
}

export default PlacardIcon;
