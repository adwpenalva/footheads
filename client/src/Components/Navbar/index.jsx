import React, { Component } from 'react';

import { Button, Navbar, Nav, NavDropdown, Form } from 'react-bootstrap';
import './style.scss';

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(event) {
    console.log(event.target.value);
    this.setState({ search: event.target.value.substr(0, 20) });
  }

  render() {
    return (
      <div>
        <Navbar bg="success" expand="lg">
          <Navbar.Brand href="/">FootHeads</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/sign-up">Sign Up</Nav.Link>
              <NavDropdown title="Info" id="basic-nav-dropdown">
                <NavDropdown.Item href="/leagues">Leagues</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">Todays Fixtures</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Contact</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {/* <Form inline> */}
            {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
            {/* <input type="text" value={this.state.search} onChange={this.updateSearch} />
              <Button variant="outline-light">Search</Button>
            </Form> */}
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
