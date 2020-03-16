import React, { Component } from 'react';

import { getAllLeagues } from './../../services/api-services.js';

import './style.scss';

export default class Leagues extends Component {
  constructor() {
    super();
    this.state = {
      leagues: []
    };
  }

  async componentDidMount() {
    try {
      const leagues = await getAllLeagues();
      // console.log(leagues);
      this.setState({
        leagues
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const leagues = this.state.leagues;
    return (
      <div>
        <h1>League Selection</h1>
        <ul>
          {leagues
            .filter(league => {
              return league.strSport === 'Soccer';
            })
            .map(league => (
              <li key={league.idLeague}>{league.strLeague}</li>
            ))}
        </ul>
      </div>
    );
  }
}
