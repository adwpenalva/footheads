import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { signUp } from '../../services/authentication';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      favoriteTeam: '',
      favoritePlayer: '',
      bio: '',
      picture: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  handleFormSubmission(event) {
    console.log('these are the props', this.props);
    event.preventDefault();
    const { name, email, password, favoriteTeam, favoritePlayer, bio } = this.state;
    console.log(name, email, password, favoritePlayer, favoriteTeam);
    signUp({
      name,
      email,
      password,
      favoriteTeam,
      favoritePlayer,
      bio
    })
      .then(user => {
        this.props.updateUserInformation(user);
        console.log('new user in app?', user);
        this.props.history.push('/');
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleInputChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="form-style page-container">
        <h1>Sign Up</h1>
        <h5>
          For exclusive access to{' '}
          <i>
            blogging, comments, predictions and all the latest updates across European football,
          </i>
          <b> fill out the form below:</b>
        </h5>
        <form onSubmit={this.handleFormSubmission}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            onChange={this.handleInputChange}
            value={this.state.name}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={this.handleInputChange}
            value={this.state.email}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.handleInputChange}
            value={this.state.password}
          />
          <label htmlFor="favoritePlayer">Favorite Player</label>
          <input
            id="favoritePlayer"
            name="favoritePlayer"
            type="text"
            placeholder="Your Favorite Player"
            onChange={this.handleInputChange}
            value={this.state.favoritePlayer}
          />
          <small>
            Already a member? Login
            <Link to="/login"> here</Link>
          </small>
          <button>Sign up</button>
        </form>
      </div>
    );
  }
}

export default Signup;
