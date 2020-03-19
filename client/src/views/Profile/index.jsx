import React, { Component } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

class ProfileView extends Component {
  render() {
    const user = this.props.user;
    return (
      <div>
        {this.props.user && (
          <div>
            <h1>{user.name}'s Profile</h1>
            <Link to="/profile/edit">
              <button>Edit profile</button>
            </Link>
            <img className="profile-img" src={user.picture} alt="profile image" />
            <p>
              <strong>Favorite Player: </strong>
              {user.favoritePlayer}
            </p>
            <p>
              <strong></strong>
            </p>
            <p>Favorite team with banner</p>
            <p>Next fixture</p>
            <p>Favorite team latest fixtures with recent form</p>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileView;
