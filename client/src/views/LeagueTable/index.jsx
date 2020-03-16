import React, { Component } from 'react';
import { getTableLeague } from './../../services/api-services';

export default class LeagueTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leagueTable: null
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;

    getTableLeague(id)
      .then(information => {
        console.log(information.data.table);
        this.setState({
          leagueTable: information.data.table
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <h1>Table</h1>
        <table>
          <tr>
            <th>Position</th>
            <th>Name</th>
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
                <tr>
                  <td>{this.state.leagueTable.indexOf(val) + 1}</td>
                  <td>{val.name}</td>
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