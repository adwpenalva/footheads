import axios from 'axios';

const apiPostService = axios.create({
  baseURL: '/api/prediction'
});

export const postPrediction = async postPredictionModel => {
  //console.log('at the editing post service');
  try {
    //console.log('entrou no try');
    console.log(postPredictionModel);
    const response = await apiPostService.post('/post-prediction', postPredictionModel);
    console.log(response.data, 'here is the prediction that we just posted');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPrediction = async (userId, matchId) => {
  //console.log('at the editing post service');
  try {
    //console.log('entrou no try');
    //console.log(postPredictionModel);
    const response = await apiPostService.get(`/get-predictions/${userId}/${matchId}`);
    console.log(response.data, 'here is the prediction of the user for the match');
    return response.data.prediction[0];
  } catch (error) {
    console.log(error);
  }
};

export const getAllPredictions = async matchId => {
  //console.log('at the editing post service');
  try {
    //console.log('entrou no try');
    //console.log(postPredictionModel);
    const response = await apiPostService.get(`/get-predictions/${matchId}`);
    console.log(response.data, 'here are all the predictions for the match');
    return response.data.prediction;
  } catch (error) {
    console.log(error);
  }
};
