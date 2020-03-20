import React, { Component } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { getTeamInfo } from './../../services/api-services';

class ProfileView extends Component {
  render() {
    const user = this.props.user;
    const team = '';
    // console.log(getTeamInfo(user.favoriteTeam.data));
    // team = getTeamInfo(user.favoriteTeam);
    // const teamId = user.favoriteTeam;
    return (
      <div>
        {this.props.user &&
          (console.log('CONSOLE LOG HERE:', getTeamInfo(Number(user.favoriteTeam))),
          (
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
                <strong>User bio:</strong>
                {user.bio}
              </p>
              <p>
                <strong>My favorite team's ID:</strong>
                {user.favoriteTeam}
              </p>
              {/* <p>
                <strong>My team's name:</strong>
                {user.favoriteTeam.data.teams[0].strTeam}
              </p> */}
              <p>Next fixture</p>
              <p>Favorite team latest fixtures with recent form</p>
            </div>
          ))}
      </div>
    );
  }
}

export default ProfileView;
