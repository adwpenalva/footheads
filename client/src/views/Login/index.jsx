import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { signIn } from './../../services/authentication';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
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
      <div className="login">
        <div className="form__style">
          <h1>Login</h1>
          <h5>Welcome back!</h5>
          <p>Login to receive access to latest blogs & comments.</p>
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
            <div className="form__buttons">
              <small>
                Not a member? Sign up
                <Link to="/sign-up"> here</Link>
              </small>
              <button>Sign in</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
