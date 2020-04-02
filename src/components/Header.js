import React, { Component } from 'react';
import './Header.scss';

import { 
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

export class Header extends Component {
  render() {
    return (
      <Navbar className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <NavbarBrand className="col-sm-3 col-md-2 mr-0" href="/">
          Corona Beer Virus 2019
        </NavbarBrand>
        <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
        <Nav className="navbar-nav px-3">
          <NavItem className="text-nowrap">
            <NavLink href="#">Sign out</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default Header;