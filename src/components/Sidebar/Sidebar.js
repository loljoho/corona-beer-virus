import React, { Component } from 'react';
import './Sidebar.scss';

import { 
  Nav,
} from 'react-bootstrap';

import { ReactComponent as HomeIcon } from '../../lib/icons/tachometer-alt.svg';
import { ReactComponent as NJIcon } from '../../lib/icons/nj.svg';
import { ReactComponent as StateIcon } from '../../lib/icons/map-marker-alt.svg';
import { ReactComponent as CountryIcon } from '../../lib/icons/flag-usa.svg';
import { ReactComponent as AreaChartIcon } from '../../lib/icons/chart-area.svg';
import { ReactComponent as LineChartIcon } from '../../lib/icons/chart-line.svg';
import { ReactComponent as PieChartIcon } from '../../lib/icons/chart-pie-alt.svg';
import { ReactComponent as MedFileIcon } from '../../lib/icons/file-medical.svg';
import { ReactComponent as AddIcon } from '../../lib/icons/plus-circle.svg';

class Sidebar extends Component {
  render() {
    return (
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <Nav className="flex-column mb-2">
            <Nav.Item>
              <Nav.Link className="active" href="/">
                <HomeIcon className="icon" />
                Dashboard
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/nj">
                <NJIcon className="icon icon-nj" />
                New Jersey
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/states">
                <StateIcon className="icon" />
                States
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/country">
                <CountryIcon className="icon" />
                Country
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Special views</span>
            {/* eslint-disable-next-line */}
            <a className="d-flex align-items-center text-muted" aria-label="Add a new report">
              <AddIcon className="icon" />
            </a>
          </h6>
          <Nav className="flex-column mb-2">
            <Nav.Item>
              <Nav.Link href="#">
                <AreaChartIcon className="icon" />
                Integration things
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">
                <LineChartIcon className="icon" />
                Pandemic stuff
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">
                <PieChartIcon className="icon" />
                Pacman pies
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">
                <MedFileIcon className="icon" />
                Something medical
              </Nav.Link>
            </Nav.Item>
          </Nav>
          
        </div>
      </nav>
    )
  }
}

export default Sidebar;