import React, { Component } from 'react';
import { getTableLeague } from './../../services/api-services';
import { Link } from 'react-router-dom';

import './style.scss';

export default class LeagueTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leagueTable: null,
      season: '1920',
      leagueId: '',
      helper: ''
    };
    this.fetchTableLeagueInfo = this.fetchTableLeagueInfo.bind(this);
    this.manageLeagueSeason = this.manageLeagueSeason.bind(this);
  }
  componentDidMount() {
    // let season = '1920';
    // this.props.match.params.id === '4351' ? (season = '2019') : (season = '1920');
    // this.setState({ season });
    this.fetchTableLeagueInfo();
  }

  fetchTableLeagueInfo() {
    const id = this.props.match.params.id;
    const season = this.state.season;
    let helper;
    this.setState({
      leagueId: id
    });
    switch (id) {
      case '4328':
        helper =
          'https://res.cloudinary.com/footheads/image/upload/v1584982292/banners/EPL_ogiwsm.png';
        break;
      case '4329':
        helper =
          'https://res.cloudinary.com/footheads/image/upload/v1584982292/banners/CHAMPIONSHIP_zjq41y.png';
        break;
      case '4331':
        helper =
          'https://res.cloudinary.com/footheads/image/upload/v1584996670/banners/BUNDESLIGA_yffk8j.png';
        break;
      case '4332':
        helper =
          'https://res.cloudinary.com/footheads/image/upload/v1584982292/banners/SERIEA_a5gk8r.png';
        break;
      case '4334':
        helper =
          'https://res.cloudinary.com/footheads/image/upload/v1584982292/banners/LIGUE1_mvxhqr.jpg';
        break;
      case '4335':
        helper =
          'https://res.cloudinary.com/footheads/image/upload/v1584982292/banners/LALIGA_pkr28e.png';
        break;
      case '4337':
        helper =
          'https://res.cloudinary.com/footheads/image/upload/v1584982292/banners/EREDIVIS_ldjyow.png';
        break;
      case '4344':
        helper =
          'https://res.cloudinary.com/footheads/image/upload/v1584982292/banners/LIGA_NOS_cwvjnd.jpg';
        break;
      case '4346':
        helper =
          'https://res.cloudinary.com/footheads/image/upload/v1584982293/banners/MLS_jpqxgy.png';
        break;
    }
    this.setState({
      helper
    });
    getTableLeague(id, season)
      .then(information => {
        console.log(information);
        this.setState({
          leagueTable: information.data.table
        });
      })
      .catch(error => console.log(error));
  }

  manageLeagueSeason(event) {
    event.preventDefault();
    const season = event.target.value;
    this.setState({ season });
    this.fetchTableLeagueInfo();
  }

  render() {
    return (
      <div className="table">
        <figure>
          <img src={this.state.helper} alt="lol" />
        </figure>
        <section className="LeagueTable">
          <h2>Table</h2>
          <div className="table__opening__text">
            <hr />
            <p>Continuous updates are made after each game to keep on top of all the action.</p>
            <hr />
          </div>
          <label>Select Season</label>
          {
            <select name="season" onChange={this.manageLeagueSeason}>
              <option value="1920">19/20</option>
              <option value="1819">18/19</option>
              <option value="1718">17/18</option>
              <option value="1617">16/17</option>
            </select>
          }
          <table>
            <thead>
              <tr>
                <th>-</th>
                <th>Team</th>
                <th>GP</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>GF</th>
                <th>GA</th>
                <th>GD</th>
                <th>PTS</th>
              </tr>
            </thead>
            <tbody>
              {this.state.leagueTable &&
                this.state.leagueTable.map(val => {
                  return (
                    <tr key={val.teamid}>
                      <td>{this.state.leagueTable.indexOf(val) + 1}</td>
                      <td>
                        <Link to={`/club/id/${val.teamid}`}>{val.name}</Link>
                      </td>
                      <td>{val.played}</td>
                      <td>{val.win}</td>
                      <td>{val.draw}</td>
                      <td>{val.loss}</td>
                      <td>{val.goalsfor}</td>
                      <td>{val.goalsagainst}</td>
                      <td>{val.goalsdifference}</td>
                      <td>
                        <b>{val.total}</b>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}
