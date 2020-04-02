import React, { Component } from 'react';
import './Subheader.scss';

import { 
  ButtonToolbar,
  ButtonGroup,
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

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
          <UncontrolledButtonDropdown>
            <DropdownToggle caret size="sm" outline color="secondary">
              <Calendar className="feather" size={16} />
              This week
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </ButtonToolbar>
      </div>
    )
  }
}

export default Subheader;