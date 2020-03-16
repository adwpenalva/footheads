import React, { Component } from 'react';
import { getAllLeagueInfo } from '../../services/api-services';

export default class LeagueTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      league: null
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;

    getAllLeagueInfo(id)
      .then(information => {
        this.setState({
          league: information.teams
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <h1>Club</h1>
        {this.state.league &&
          this.state.league.map(val => {
            return <p>{val.idTeam}</p>;
          })}
      </div>
    );
  }
}
