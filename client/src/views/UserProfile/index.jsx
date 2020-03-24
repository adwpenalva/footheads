import React, { Component } from 'react';
import { getUserInfo } from './../../services/user';
import { getTeamInfo } from './../../services/api-services';
import './style.scss';
class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      teamInfo: ''
    };
  }

  async componentDidMount() {
    let authorId = this.props.match.params.Id;
    try {
      let user = await getUserInfo(authorId);
      const team = await getTeamInfo(Number(user.favoriteTeam));
      this.setState({
        user,
        teamInfo: team.data.teams[0]
      });
    } catch (error) {
      console.log(error);
    }
    console.log('CONSOLE LOG USER BIO:', this.state.user, this.state.teamInfo);
  }

  render() {
    return (
      <div>
        {this.state.user && (
            <div className="profile">
              <div className="profile__opening">
                <img className="profile__img" src={this.state.user.picture} alt="profile picture" />
              </div>
          <div className="profile__name__badge">
            <h2>{this.state.user.name}'s Profile</h2>
            <figure>
              <img src={this.state.teamInfo.strTeamBadge} alt={this.state.teamInfo.strTeam} />
            </figure>
            </div>
            <div className="profile__description">
              <p>
                <strong>About Me:</strong>
                <br />
                {this.state.user.bio}
              </p>
              <hr />
              <p>
                <strong>Favorite player:</strong> {this.state.user.favoritePlayer}
              </p>
              <hr />
              <p>
                <strong>Favorite Team:</strong> {this.state.teamInfo.strTeam}
              </p>
              <hr />
              <p>
                <strong>Best 11:</strong>
                <br />
                <strong>Goalkeeper: </strong>
                {this.state.user.best1}
                <br />
                <strong>Right Back: </strong>
                {this.state.user.best2}
                <br />
                <strong>Center Back: </strong>
                {this.state.user.best3}
                <br />
                <strong>Center Back: </strong>
                {this.state.user.best4}
                <br />
                <strong>Left Back: </strong>
                {this.state.user.best6}
                <br />
                <strong>Defensive Middlefielder: </strong>
                {this.state.user.best5}
                <br />
                <strong>Central Middlefielder: </strong>
                {this.state.user.best8}
                <br />
                <strong>Offensive Middlefielder: </strong>
                {this.state.user.best7}
                <br />
                <strong>Offensive Middlefielder: </strong>
                {this.state.user.best10}
                <br />
                <strong>Striker: </strong>
                {this.state.user.best9}
                <br />
                <strong>Striker: </strong>
                {this.state.user.best11}
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default UserProfile;
