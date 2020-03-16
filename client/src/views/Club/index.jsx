import React, { Component } from 'react';
import { getTeamInfo } from '../../services/api-services';
import { Link } from 'react-router-dom';
import './style.scss';

export default class ClubInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      club: null
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
    getTeamInfo(id)
      .then(information => {
        this.setState({
          club: information.data.teams
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        {this.state.club &&
          this.state.club.map(val => {
            return (
              <div>
                <img src={val.strTeamBanner} alt={val.strTeam} />
                <h1>{val.strTeam}</h1>
                <p> {val.strAlternate} </p>
                <p> Formed in {val.intFormedYear} </p>
                <p>
                  {val.strLeague}, {val.strCountry}
                </p>
                <img src={val.strTeamBadge} alt={val.strTeam} />
                <img src={val.strTeamJersey} alt={val.strTeam} />
                <p>{val.strDescriptionEN}</p>
                <p>
                  {val.strStadium} - {val.strStadiumLocation}
                </p>
                <p>Capacity: {val.intStadiumCapacity}</p>
                <img src={val.strStadiumThumb} alt={val.strStadium} />
                <article>
                  <i>{val.strStadiumDescription}</i>
                </article>
                <div>
                  <Link to={val.strWebsite}>Website</Link>
                  <Link to={val.strFacebook}>Facebook</Link>
                  <Link to={val.strTwitter}>Twitter</Link>
                  <Link to={val.strInstagram}>Instagram</Link>
                  <p></p>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}
