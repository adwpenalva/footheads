import React, { Component } from 'react';
import './style.scss';
class Login extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="Email" />
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" placeholder="Password" />
          <button>Sign in</button>
        </form>
      </div>
    );
  }
}

export default Login;
