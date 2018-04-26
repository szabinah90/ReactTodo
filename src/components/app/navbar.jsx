import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
  render () {
    return (
      <Navbar default>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/todos' id='my-nav-item'>ToDo List</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <li>
            <Link to='/contact' id='my-nav-item'>Contact Info</Link>
          </li>
        </Nav>
      </Navbar>
    );
  }
}
export default Navigation;
