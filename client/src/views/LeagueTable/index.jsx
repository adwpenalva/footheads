import React, { Component } from 'react';
import { getTableLeague } from './../../services/api-services';
import { Link } from 'react-router-dom';

import './style.scss';

export default class LeagueTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leagueTable: null,
      season: ''
    };
    this.fetchTableLeagueInfo = this.fetchTableLeagueInfo.bind(this);
    this.manageLeagueSeason = this.manageLeagueSeason.bind(this);
  }
  componentDidMount() {
    let season;
    this.props.match.params.id === '4351' ? (season = '2019') : (season = '1920');
    this.setState({ season });
    this.fetchTableLeagueInfo();
  }

  fetchTableLeagueInfo() {
    const id = this.props.match.params.id;
    const season = this.state.season;
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
    const brazileanLeague = this.props.match.params.id === '4351';
    return (
      <div>
        <h1>Table</h1>
        <label>Season</label>
        {(brazileanLeague && (
          <select name="season" onChange={this.manageLeagueSeason}>
            <option value="2018">2019</option>
            <option value="2017">2018</option>
            <option value="2016">2017</option>
            <option value="2015">2016</option>
          </select>
        )) || (
          <select name="season" onChange={this.manageLeagueSeason}>
            <option value="1920">19/20</option>
            <option value="1819">18/19</option>
            <option value="1718">17/18</option>
            <option value="1617">16/17</option>
          </select>
        )}
        <table>
          <tr>
            <th>Pos</th>
            <th>Team</th>
            <th>GP</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GF</th>
            <th>GA</th>
            <th>GD</th>
            <th>Points</th>
          </tr>
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
                  <td>{val.total}</td>
                </tr>
              );
            })}
        </table>
      </div>
    );
  }
}
