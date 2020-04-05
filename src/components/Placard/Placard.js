import React from 'react'
import './Placard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { 
  Row,
  Col,
  Card
} from 'react-bootstrap';

const Placard = (props) => {
  const { icon } = props;
  return (
    <>
      <div className="placard col-xl-3 col-lg-4 col-sm-6 col-xs-12 mb-4">
        <Card className="border-left-primary shadow h-100 py-2">
          <Card.Body>
            <Row noGutters align-items-center="true">
              <Col className="mr-2">
                <div className="text-xs text-break font-weight-bold text-primary text-uppercase mb-1">
                  {props.label}
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {props.value}
                </div>
              </Col>

              <Col>
                <FontAwesomeIcon 
                  className="float-right"
                  icon={icon}
                  size="4x" 
                  color="#999999"
                  fixedWidth
                />
              </Col>
            </Row>
          </Card.Body>
          {/* <Card.Footer className="text-muted">Placard Footer</Card.Footer> */}
        </Card>
      </div>
    </>
  );
}

export default Placard;
