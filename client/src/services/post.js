import axios from 'axios';

const apiPostService = axios.create({
  baseURL: '/api/blog'
});

export const createPost = async post => {
  console.log('at the post posting service', post);
  try {
    const response = await apiPostService.post(`/create`, post);
    return response.data;
  } catch (error) {
    console.log('Error in post service', error);
    throw error;
  }
};

export const listPosts = async () => {
  try {
    const response = await apiPostService.get(`/get-posts`);
    console.log(response.data, 'here is the services return NEW');
    return response.data.posts;
  } catch (error) {
    throw error;
  }
};

export const deletePost = async id => {
  console.log(id, 'at the delete service');
  const post = {
    id: id
  };
  try {
    const response = await apiPostService.post(`/delete-post`, post);
    console.log(response.data, 'here is the deleted post');
    return response;
  } catch (error) {
    throw error;
  }
};
