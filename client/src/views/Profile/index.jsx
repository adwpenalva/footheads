import React, { Component } from 'react';
import './style.scss';

class ProfileView extends Component {
  render() {
    return (
      <div>
        <h1>User's Profile</h1>
        <button>Edit profile</button>
        <img src="" alt="" />
        <p>Favorite team</p>
        <p>Next fixture</p>
        <p>Favorite team latest fixtures with recent form</p>
      </div>
    );
  }
}

export default ProfileView;
