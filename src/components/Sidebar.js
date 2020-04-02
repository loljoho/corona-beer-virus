import React, { Component } from 'react';
import './Sidebar.scss';

import { 
  Nav,
  NavItem,
  NavLink 
} from 'reactstrap';

import { 
  Home,
  Map,
  MapPin,
  FileText,
  PlusCircle
} from 'react-feather';

export class Sidebar extends Component {
  render() {
    return (
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <Nav className="flex-column mb-2">
            <NavItem>
              <NavLink className="active" href="#">
                <Home className="feather" size={16} />
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <MapPin className="feather" size={16} />
                States
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <Map className="feather" size={16} />
                Country
              </NavLink>
            </NavItem>
          </Nav>

          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Saved reports</span>
            {/* eslint-disable-next-line */}
            <a className="d-flex align-items-center text-muted" aria-label="Add a new report">
              <PlusCircle className="feather" />
            </a>
          </h6>
          <Nav className="flex-column mb-2">
            <NavItem>
              <NavLink className="nav-link" href="#">
                <FileText className="feather" size={16} />
                Current month
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" href="#">
                <FileText className="feather" size={16} />
                Last quarter
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" href="#">
                <FileText className="feather" size={16} />
                Social engagement
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" href="#">
                <FileText className="feather" size={16} />
                Year-end sale
              </NavLink>
            </NavItem>
          </Nav>
          
        </div>
      </nav>
    )
  }
}

export default Sidebar;