import React, { Component } from 'react';
import './style.scss';
import { signIn } from './../../services/authentication';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'james@dean.com',
      password: '123456789'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  async handleFormSubmission(event) {
    event.preventDefault();
    const { email, password } = this.state;
    signIn({
      email,
      password
    })
      .then(user => {
        console.log('back at the app', user);
        this.props.updateUserInformation(user);
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
      <div>
        <form onSubmit={this.handleFormSubmission}>
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
          <button>Sign in</button>
        </form>
      </div>
    );
  }
}

export default Login;
