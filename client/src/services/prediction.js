import axios from 'axios';

const apiPostService = axios.create({
  baseURL: '/api/prediction'
});

export const postPrediction = async postPredictionModel => {
  console.log('at the editing post service');
  try {
    console.log('entrou no try');
    console.log(postPredictionModel);
    const response = await apiPostService.post('/post-prediction', postPredictionModel);
    console.log(response.data, 'here is the prediction that we just posted');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
