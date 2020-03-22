import React, { Component } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { getTeamInfo } from './../../services/api-services';
import { loadUserInformation } from './../../services/authentication';

class ProfileView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamInfo: ''
    };
  }

  async componentDidMount() {
    try {
      const user = await loadUserInformation();
      const team = await getTeamInfo(Number(user.favoriteTeam));
      console.log('TEAM ON TRY', team.data.teams[0]);
      this.setState({
        teamInfo: team.data.teams[0]
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const user = this.props.user;

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
              {
                <p>
                  <strong>My team's name:</strong>
                  {this.state.teamInfo.strTeam}
                </p>
              }
              {
                <figure>
                  <img src={this.state.teamInfo.strTeamBadge} alt={this.state.teamInfo.strTeam} />
                </figure>
              }
              <p>Next fixture</p>
              <p>Favorite team latest fixtures with recent form</p>
            </div>
          ))}
      </div>
    );
  }
}

export default ProfileView;
