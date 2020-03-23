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
        {this.props.user &&
          (console.log('CONSOLE LOG HERE:', getTeamInfo(Number(user.favoriteTeam))),
          (
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
                  <strong>About Me:</strong>
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
                {/* <p>
                  <strong>Favorite Team:</strong>
                  <br />
                  {this.state.teamInfo.strTeam}
                </p>
                <hr /> */}
                {
                  <p>
                    <strong>My team's name:</strong>
                    <br />
                    {this.state.teamInfo.strTeam}
                  </p>
                }
                <p>
                  <strong>My best 11:</strong>
                  <br />
                  <strong>Goalkeeper: </strong>
                  {user.best1}
                  <br />
                  <strong>Right Back: </strong>
                  {user.best2}
                  <br />
                  <strong>Center Back: </strong>
                  {user.best3}
                  <br />
                  <strong>Center Back: </strong>
                  {user.best4}
                  <br />
                  <strong>Left Back: </strong>
                  {user.best6}
                  <br />
                  <strong>Defensive Middlefielder: </strong>
                  {user.best5}
                  <br />
                  <strong>Central Middlefielder: </strong>
                  {user.best8}
                  <br />
                  <strong>Offensive Middlefielder: </strong>
                  {user.best7}
                  <br />
                  <strong>Offensive Middlefielder: </strong>
                  {user.best10}
                  <br />
                  <strong>Striker: </strong>
                  {user.best9}
                  <br />
                  <strong>Striker: </strong>
                  {user.best11}
                </p>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default ProfileView;
