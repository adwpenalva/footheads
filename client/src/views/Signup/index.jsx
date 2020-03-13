import React, { Component } from 'react';
import './style.scss';
class Signup extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Name" />
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="Email" />
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" placeholder="Password" />
          <button>Sign up</button>
        </form>
      </div>
    );
  }
}

export default Signup;
