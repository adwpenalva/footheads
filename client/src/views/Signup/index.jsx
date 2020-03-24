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
      favoritePlayer: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  handleFormSubmission(event) {
    console.log('these are the props', this.props);
    event.preventDefault();
    const { name, email, password, favoritePlayer } = this.state;
    console.log(name, email, password, favoritePlayer);
    signUp({
      name,
      email,
      password,
      favoritePlayer
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
      <div className="signup">
        <div className="form__style">
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
            <div className="form__buttons">
              <small>
                Already a member? Login
                <Link to="/login"> here</Link>
              </small>
              <button>Sign up</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
