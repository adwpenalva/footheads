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
////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getTableLeague = async (id, season) => {
  try {
    const response = await axios.get(
      `https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=${id}&s=${season}`
    );
    return response;
  } catch (error) {
    throw error;
  }
};
////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getTeamInfo = async id => {
  try {
    const response = await axios.get(
      `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

//CREATE A SERVICE THAT PASSSES TO THE FRONT END ONLY THE SOCCER LEAGUES

export const allSoccerLeagues = async () => {
  try {
    const allLeagues = await axios.get('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php');
    console.log(allLeagues);
    const soccerLeagues = allLeagues.data.leagues.filter(league => league.strSport === 'Soccer');
    return soccerLeagues;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

//always data
////////////////////////////////////////////////////////////////////////////////////////////////////////
// NEXT 5 FIXTURE BY TEAM ID
export const getNext5FixturesByTeamId = async id => {
  try {
    const response = await axios.get(
      `https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=${id}`
    );
    return response;
  } catch (error) {
    throw error;
  }
};
////////////////////////////////////////////////////////////////////////////////////////////////////////
// LAST 5 FIXTURE BY TEAM ID
export const getLast5FixturesByTeamId = async id => {
  try {
    const response = await axios.get(
      `https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=${id}`
    );
    return response;
  } catch (error) {
    throw error;
  }
};
////////////////////////////////////////////////////////////////////////////////////////////////////////
//NEXT 15 EVENTS BY LEAGUE ID
export const getNext15FixturesByTeamId = async id => {
  try {
    const response = await axios.get(
      `https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=${id}`
    );
    return response;
  } catch (error) {
    throw error;
  }
};
////////////////////////////////////////////////////////////////////////////////////////////////////////
//LAST 15 EVENTS BY LEAGUE ID
export const getLast15FixturesByTeamId = async id => {
  try {
    const response = await axios.get(
      `https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=${id}`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

//this service will be getting information about the Club information
////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getAllLeagueInfo = async id => {
  try {
    const response = await axios.get(
      `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
