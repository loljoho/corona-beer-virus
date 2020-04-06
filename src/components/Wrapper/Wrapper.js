import React from 'react';
import './Wrapper.scss';

import { 
  Container, 
  Row
} from 'react-bootstrap';

function Wrapper(props) {
  return (
    <Container className="themed-container" fluid={true}>
      <Row>
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          {props.children}
        </main>
      </Row>
    </Container>
  );
}

export default Wrapper;
