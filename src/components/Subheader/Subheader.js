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
    const { title } = this.props;
    return (
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">{title}</h1>
        <ButtonToolbar className="mb-2 mb-md-0">
          <ButtonGroup className="mr-2">
            <Button size="sm" outline color="secondary">Share</Button>
            <Button size="sm" outline color="secondary">Export</Button>
          </ButtonGroup>

          <Dropdown>
            <Dropdown.Toggle caret size="sm" variant="outline-secondary">
              <Calendar className="feather" size={16} />
              This week
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item header>Header</Dropdown.Item>
              <Dropdown.Item disabled>Action</Dropdown.Item>
              <Dropdown.Item>Another Action</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Another Action</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ButtonToolbar>
      </div>
    )
  }
}

export default Subheader;