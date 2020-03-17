import React, { Component } from 'react';
import { getTeamInfo, getNext5FixturesByTeamId } from '../../services/api-services';
import './style.scss';

export default class ClubInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      club: null,
      fixtures: null
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(this.props.match.params);
    getTeamInfo(id)
      .then(information => {
        this.setState({
          club: information.data.teams
        });
      })
      .catch(error => console.log(error));
    getNext5FixturesByTeamId(id).then(fixture => {
      this.setState({
        fixtures: fixture.data.events
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.club &&
          this.state.club.map(val => {
            return (
              <div className="Club">
                <img className="teamBanner" src={val.strTeamBanner} alt={val.strTeam} />
                <h1>{val.strTeam}</h1>
                <p>
                  <i>{val.strAlternate} </i>
                </p>
                <p> Formed in {val.intFormedYear} </p>
                <p>
                  {val.strLeague}, {val.strCountry}
                </p>
                <div className="badgeandjersey">
                  <img className="teamBadge" src={val.strTeamBadge} alt={val.strTeam} />
                  <img className="teamJersey" src={val.strTeamJersey} alt={val.strTeam} />
                </div>
                <h1>Next Fixtures</h1>
                {this.state.fixtures &&
                  this.state.fixtures.map(event => {
                    return (
                      <div>
                        <table>
                          <thead>
                            <tr>
                              <th>{event.strDate}</th>
                              <th>{event.strEvent}</th>
                              <th>{event.strTime}</th>
                            </tr>
                          </thead>
                        </table>
                      </div>
                    );
                  })}
                <article>
                  <p>{val.strDescriptionEN}</p>
                </article>
                <p>
                  {val.strStadium} - {val.strStadiumLocation}
                </p>
                <p>Capacity: {val.intStadiumCapacity}</p>
                <img className="stadiumImage" src={val.strStadiumThumb} alt={val.strStadium} />
                <article>
                  <i>{val.strStadiumDescription}</i>
                </article>
                <br />
                <h4>Social Media</h4>
                <div className="links">
                  {/*<button onClick={e => this.props.history.push('facebook.com')}>
                    facebook test
                  </button>*/}
                  {val.strWebsite && (
                    <a href={`https://${val.strWebsite}`}>
                      <img className="website" src="/images/www.png" alt="website" />
                    </a>
                  )}
                  {val.strFacebook && (
                    <a href={`https://${val.strFacebook}`}>
                      <img className="website" src="/images/facebook.png" alt="facebook" />
                    </a>
                  )}
                  {val.strTwitter && (
                    <a href={`https://${val.strTwitter}`}>
                      <img className="website" src="/images/twitter.png" alt="twitter" />
                    </a>
                  )}
                  {val.strInstagram && (
                    <a href={`https://${val.strInstagram}`}>
                      <img
                        className="website"
                        src="/images/instagram-sketched.png"
                        alt="instagram"
                      />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}
