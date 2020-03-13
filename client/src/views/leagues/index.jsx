import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
      console.log(leagues);
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
          {leagues.map(league => (
            <li key={league.idLeague}>{league.strLeague}</li>
          ))}
        </ul>
        {/* <ul>
          <li>
            <Link style={{ color: 'inherit' }}>Premier League</Link>
          </li>
          <li>
            <Link style={{ color: 'inherit' }}>La Liga Santander</Link>
          </li>
          <li>
            <Link style={{ color: 'inherit' }}>Serie A</Link>
          </li>
          <li>
            <Link style={{ color: 'inherit' }}>Ligue 1</Link>
          </li>
          <li>
            <Link style={{ color: 'inherit' }}>Liga NOS</Link>
          </li>
          <li>
            <Link style={{ color: 'inherit' }}>Champions League</Link>
          </li>
          <li>
            <Link style={{ color: 'inherit' }}>Europa League</Link>
          </li>
          <li>
            <Link style={{ color: 'inherit' }}>Premier League</Link>
          </li>
        </ul> */}
      </div>
    );
  }
}
