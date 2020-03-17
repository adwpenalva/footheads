import React, { Component } from 'react';

import { Navbar, Nav } from 'react-bootstrap';
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
        {this.props.user && (
          <div>
            <Navbar bg="dark" variant="dark" expand="lg">
              <Navbar.Brand href="/">FootHeads</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/leagues">Leagues</Nav.Link>
                  <Nav.Link href="/fixtures">Fixtures</Nav.Link>
                  <Nav.Link href="/blog">Blog</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        )}

        {!this.props.user && (
          <div>
            <Navbar bg="dark" variant="dark" expand="lg">
              <Navbar.Brand href="/">FootHeads</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="/sign-up">Sign Up</Nav.Link>
                  <Nav.Link href="/leagues">Leagues</Nav.Link>
                  <Nav.Link href="/fixtures">Fixtures</Nav.Link>
                  <Nav.Link href="/blog">Blog</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        )}
      </div>
    );
  }
}

export default NavBar;
