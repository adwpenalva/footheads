import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getAllLeagues } from './../../services/api-services.js';

import './style.scss';
//import { info } from 'node-sass';

export default class Leagues extends Component {
  constructor() {
    super();
    this.state = {
      leagues: []
    };
  }
  async componentDidMount() {
    const top10Leagues = ['4328', '4329', '4331', '4332', '4334', '4335', '4337', '4344', '4346'];
    try {
      const allLeagues = await getAllLeagues();

      const leagues = allLeagues.filter(singleLeague => {
        if (top10Leagues.indexOf(singleLeague.idLeague) >= 0) {
          return true;
        } else {
          return false;
        }
      });

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
        <section className="league">
          <h1>League Selection</h1>
          <p>
            Select the league you want, for access to club information, current league standings and
            previous seasons.
          </p>
          {leagues.map(
            league => (
              console.log('LEAGUE:', league),
              (
                <h5 key={league.idLeague}>
                  <Link to={`/league/id/${league.idLeague}`}>{league.strLeague}</Link>
                </h5>
              )
            )
          )}
        </section>
      </div>
    );
  }
}
