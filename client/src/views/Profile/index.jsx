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
      <div className="profile">
        {this.props.user && (
          <div>
            <div className="profile__opening">
              <img className="profile__img" src={user.picture} alt="profile image" />
              <Link to="/profile/edit">
                <button>
                  <img
                    className="profile__edit__favicon"
                    src="https://img.icons8.com/metro/26/000000/edit.png"
                  />
                </button>
              </Link>
            </div>
            <div className="profile__name__badge">
              <h1>{user.name}'s Profile</h1>
              <figure>
                <img src={this.state.teamInfo.strTeamBadge} alt={this.state.teamInfo.strTeam} />
              </figure>
            </div>
            <div className="profile__description">
              <p>
                <strong>About me:</strong>
                <br />

                {user.bio}
              </p>
              <hr />
              <p>
                <strong>Favorite Player: </strong>
                <br />
                {user.favoritePlayer}
              </p>
              <hr />
              <p>
                <strong>Favorite Team:</strong>
                <br />
                {user.favoriteTeam}
              </p>
              <hr />
              {
                <p>
                  <strong>My team's name:</strong>
                  <br />
                  {this.state.teamInfo.strTeam}
                </p>
              }
              <hr />
              <p>Next fixture</p>
              <p>Favorite team latest fixtures with recent form</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileView;
