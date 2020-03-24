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
            <div className="profile__page">
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
                <div className="profile__box">
                  <p>
                    <strong>About Me:</strong>
                    <br />
                    {user.bio}
                  </p>
                  <hr />
                </div>
                <div className="profile__box">
                  <p>
                    <strong>Favorite Player: </strong>
                    <br />
                    {user.favoritePlayer}
                  </p>
                  <hr />
                </div>
                <div className="profile__box">
                  <p>
                    <strong>My team's name:</strong>
                    <br />
                    {this.state.teamInfo.strTeam}
                  </p>
                  <hr />
                  <div>
                    <strong>Best XI:</strong>
                    <div className="center">
                      <div className="pitch">
                        <div className="gk">
                          <div>GK</div>
                        </div>
                        <div className="names">
                          <p>{user.best1}</p>
                        </div>
                        <div className="df">
                          <div>RB</div>
                          <div>CB</div>
                          <div>CB</div>
                          <div>LB</div>
                        </div>
                        <div className="names">
                          <div>{user.best2}</div>
                          <div>{user.best3}</div>
                          <div>{user.best4}</div>
                          <div>{user.best6}</div>
                        </div>

                        <div className="mf">
                          <div>RM</div>
                          <div>CM</div>
                          <div>CM</div>
                          <div>LM</div>
                        </div>
                        <div className="names">
                          <div>{user.best10}</div>
                          <div>{user.best5}</div>
                          <div>{user.best8}</div>
                          <div>{user.best7}</div>
                        </div>

                        <div className="str">
                          <div>ST</div>
                          <div>ST</div>
                        </div>
                        <div className="names">
                          <div>{user.best9}</div>
                          <div>{user.best11}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default ProfileView;
