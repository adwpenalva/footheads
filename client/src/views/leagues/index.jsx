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
    const top10Leagues = [
      {
        id: '4328',
        image:
          'https://res.cloudinary.com/footheads/image/upload/v1584982292/banners/EPL_ogiwsm.png'
      },
      {
        id: '4329',
        image:
          'https://res.cloudinary.com/footheads/image/upload/v1584982292/banners/CHAMPIONSHIP_zjq41y.png'
      },
      {
        id: '4331',
        image:
          'https://res.cloudinary.com/footheads/image/upload/v1584996670/banners/BUNDESLIGA_yffk8j.png'
      },
      {
        id: '4332',
        image:
          'https://res.cloudinary.com/footheads/image/upload/v1584982292/banners/SERIEA_a5gk8r.png'
      },
      {
        id: '4334',
        image:
          'https://res.cloudinary.com/footheads/image/upload/v1584982292/banners/LIGUE1_mvxhqr.jpg'
      },
      {
        id: '4335',
        image:
          'https://res.cloudinary.com/footheads/image/upload/v1584982292/banners/LALIGA_pkr28e.png'
      },
      {
        id: '4337',
        image:
          'https://res.cloudinary.com/footheads/image/upload/v1584982292/banners/EREDIVIS_ldjyow.png'
      },
      {
        id: '4344',
        image:
          'https://res.cloudinary.com/footheads/image/upload/v1584982292/banners/LIGA_NOS_cwvjnd.jpg'
      },
      {
        id: '4346',
        image:
          'https://res.cloudinary.com/footheads/image/upload/v1584982293/banners/MLS_jpqxgy.png'
      }
    ];

    try {
      const allLeagues = await getAllLeagues();

      // console.log('MAPPED TOP 10', leagueIds);
      // const leagues = allLeagues.filter(singleLeague => {
      //   if (leagueIds.indexOf(singleLeague.idLeague) >= 0) {
      //     return true;
      //   } else {
      //     return false;
      //   }
      // });

      // console.log('LEAGUES HERE!!!!!:', leagues);
      const filteredTeams = [];
      const teamObject = {};
      for (let team of allLeagues) {
        for (let topTeam of top10Leagues) {
          if (team.idLeague === topTeam.id) {
            filteredTeams.push({
              ...team,
              topTeam
            });
          }
        }
      }
      console.log('FILTERED TEAMS ', filteredTeams);

      this.setState({
        leagues: filteredTeams
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
                  <Link to={`/league/id/${league.idLeague}`}>
                    <img className="bannerimg" src={league.topTeam.image} alt="lol" />
                  </Link>
                </h5>
              )
            )
          )}
        </section>
      </div>
    );
  }
}
