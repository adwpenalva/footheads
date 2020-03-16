import axios from 'axios';

//this service will be getting information about leagues
//https://www.thesportsdb.com/api/v1/json/1/all_leagues.php

export const getAllLeagues = async () => {
  try {
    const response = await axios.get('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php');
    const allLeagues = response.data.leagues;
    return allLeagues;
  } catch (error) {
    throw error;
  }
};

//this service will be getting information about the teams in league
//www.thesportsdb.com/api/v1/json/1/search_all_teams.php

// export const getAllLeagueTeams = async () => {
//   try {
//     const response = await axios.get('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php');
//     const allLeagueTeams = response.data.leagues;
//     return allLeagueTeams;
//   } catch (error) {
//     throw error;
//   }
// };
