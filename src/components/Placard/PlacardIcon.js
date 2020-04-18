import React from 'react';

import { Col } from 'react-bootstrap';

import { 
  getPathByName,
  getViewBoxByName,
} from '../../common/scripts/icons';

const PlacardIcon = (props) => {
  const { name } = props;
  return (
    <Col>
      <svg className="icon" viewBox={getViewBoxByName(name)}>
        <path d={getPathByName(name)} />
      </svg>
    </Col>
  );
}

export default PlacardIcon;
