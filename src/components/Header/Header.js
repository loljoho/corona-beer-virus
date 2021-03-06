import React, { Component } from 'react';
import './Header.scss';

import { 
  Navbar,
  Nav,
  // Form,
  // FormControl,
} from 'react-bootstrap';

import {
  GitHub,
} from 'react-feather';

class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" fixed="top" className="flex-md-nowrap p-0 shadow">
        <Navbar.Brand className="col-sm-3 col-md-2 mr-auto" href="/">
          Beer Virus 2019
        </Navbar.Brand>
        {/* failed search bars
        <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
        <Form inline>
          <FormControl type="text" placeholder="Search" className="w-100" aria-label="Search" />
        </Form> */}
        <Nav className="navbar-nav px-3">
          <Nav.Link className="text-nowrap" href="#">
            <GitHub className="feather" size={24} />
          </Nav.Link>
        </Nav>
      </Navbar>
    )
  }
}

export default Header;

      // <Navbar className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      //   <Navbar.Brand className="col-sm-3 col-md-2 mr-0" href="/">
      //     Beer Virus 2019
      //   </Navbar.Brand>
      //   <Nav className="navbar-nav px-3">
      //     <NavItem className="text-nowrap">
      //       <NavLink href="#">Sign out</NavLink>
      //     </NavItem>
      //   </Nav>
      // </Navbar>