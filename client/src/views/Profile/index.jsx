import React, { Component } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

class ProfileView extends Component {
  render() {
    return (
      <div>
        <h1>User's Profile</h1>
        <Link to="/profile/edit">
          <button>Edit profile</button>
        </Link>
        <img src="" alt="profile image" />
        <p>Favorite team with banner</p>
        <p>Next fixture</p>
        <p>Favorite team latest fixtures with recent form</p>
      </div>
    );
  }
}

export default ProfileView;
