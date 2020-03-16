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

export const getTableLeague = async id => {
  try {
    const response = await axios.get(
      `https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=${id}&s=1920`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

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

//always data

//this service will be getting information about the Club information

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
