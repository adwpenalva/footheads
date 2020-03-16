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
