import React, { Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './style.scss';
import { signOut } from '../../services/authentication';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
    this.updateSearch = this.updateSearch.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  updateSearch(event) {
    console.log(event.target.value);
    this.setState({ search: event.target.value.substr(0, 20) });
  }

  handleSignOut = () => {
    signOut()
      .then(() => {
        this.props.updateUserInformation(null);
        this.props.history.push('/');
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        {this.props.user ? (
          <div>
            <Navbar bg="dark" variant="dark" expand="lg">
              <Navbar.Brand href="/">FootHeads</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
<<<<<<< HEAD
                  <Nav.Link href="/leagues">{this.props.user.name}'s Profile</Nav.Link>
                  {/* <Link to="/profile/edit">Edit Profile</Link> */}
=======
                  <Nav.Link href="/profile">{this.props.user.name}'s Profile</Nav.Link>
>>>>>>> 1825c5757ffb7b5adc8cc5b3678a84e12a45dc63
                  <Nav.Link href="/leagues">Leagues</Nav.Link>
                  <Nav.Link href="/blog">Blog</Nav.Link>
                  <Button variant="dark" onClick={this.handleSignOut}>
                    Sign Out
                  </Button>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        ) : (
          <div>
            <Navbar bg="dark" variant="dark" expand="lg">
              <Navbar.Brand href="/">FootHeads</Navbar.Brand>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="/sign-up">Sign Up</Nav.Link>
                  <Nav.Link href="/leagues">Leagues</Nav.Link>
                  {/*<Nav.Link href="/fixtures">Fixtures</Nav.Link>*/}
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
