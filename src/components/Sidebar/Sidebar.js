import React, { Component } from 'react';
import './Sidebar.scss';

import { 
  Nav,
} from 'react-bootstrap';

import { 
  Home,
  Map,
  MapPin,
  FileText,
  PlusCircle,
} from 'react-feather';

class Sidebar extends Component {
  render() {
    return (
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <Nav className="flex-column mb-2">
            <Nav.Item>
              <Nav.Link className="active" href="/">
                <Home className="feather" size={16} />
                Dashboard
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/states">
                <MapPin className="feather" size={16} />
                States
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/country">
                <Map className="feather" size={16} />
                Country
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Saved reports</span>
            {/* eslint-disable-next-line */}
            <a className="d-flex align-items-center text-muted" aria-label="Add a new report">
              <PlusCircle className="feather" />
            </a>
          </h6>
          <Nav className="flex-column mb-2">
            <Nav.Item>
              <Nav.Link href="#">
                <FileText className="feather" size={16} />
                Current month
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">
                <FileText className="feather" size={16} />
                Last quarter
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">
                <FileText className="feather" size={16} />
                Social engagement
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">
                <FileText className="feather" size={16} />
                Year-end sale
              </Nav.Link>
            </Nav.Item>
          </Nav>
          
        </div>
      </nav>
    )
  }
}

export default Sidebar;