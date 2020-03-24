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
      <div className="center__user">
        {this.state.user && (
          <div className="user__profile">
            <div className="user__profile__opening">
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
              <strong>Best XI:</strong>
              <div className="center">
                <div className="pitch">
                  <div className="gk">
                    <div>GK</div>
                  </div>
                  <div className="names">
                    <div>{this.state.user.best1}</div>
                  </div>

                  <div className="df">
                    <div>RB</div>
                    <div>CB</div>
                    <div>CB</div>
                    <div>LB</div>
                  </div>
                  <div className="names">
                    <div>{this.state.user.best2}</div>
                    <div>{this.state.user.best3}</div>
                    <div>{this.state.user.best4}</div>
                    <div>{this.state.user.best6}</div>
                  </div>

                  <div className="mf">
                    <div>RM</div>
                    <div>CM</div>
                    <div>CM</div>
                    <div>LM</div>
                  </div>
                  <div className="names">
                    <div>{this.state.user.best10}</div>
                    <div>{this.state.user.best5}</div>
                    <div>{this.state.user.best8}</div>
                    <div>{this.state.user.best7}</div>
                  </div>

                  <div className="str">
                    <div>ST</div>
                    <div>ST</div>
                  </div>
                  <div className="names">
                    <div>{this.state.user.best9}</div>
                    <div>{this.state.user.best11}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default UserProfile;
