import axios from 'axios';
const apiPostService = axios.create({
  baseURL: '/user'
});

const getUserInfo = async id => {
  try {
    const response = await apiPostService.get(`/${id}`, id);
    return response.data.document[0];
  } catch (error) {
    console.log(error);
  }
};

export { getUserInfo };
