import React, { Component } from 'react';
import './Subheader.scss';

import { 
  ButtonToolbar,
  ButtonGroup,
  Button,
  Dropdown,
} from 'react-bootstrap';

import { 
  Calendar
} from 'react-feather';

export class Subheader extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  
  // const [dropdownOpen, setOpen] = useState(false);

  // const toggle = () => setOpen(!dropdownOpen);

  render() {
    const { heading, subheading } = this.props;
    return (
      <div className="Subheader d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">
          {heading}
          <small className="text-muted px-2">{subheading}</small>
        </h1>
        <ButtonToolbar className="mb-2 mb-md-0">
          <ButtonGroup size="sm" className="mr-2">
            <Button variant="outline-secondary">Share</Button>
            <Button variant="outline-secondary">Export</Button>
          </ButtonGroup>

          <Dropdown flip="true">
            <Dropdown.Toggle size="sm" variant="outline-secondary">
              <Calendar className="feather" size={16} />
              Current
            </Dropdown.Toggle>
            <Dropdown.Menu flip="true">
              <Dropdown.Item>Week</Dropdown.Item>
              <Dropdown.Item>Month</Dropdown.Item>
              <Dropdown.Item>Year</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Custom</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ButtonToolbar>
      </div>
    )
  }
}

export default Subheader;