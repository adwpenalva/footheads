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

export const findPost = async id => {
  console.log(id, 'at the edit find post service');
  const post = {
    id: id
  };
  try {
    const response = await apiPostService.post('/find-post', post);
    console.log(response.data, 'here is the post we are editing');
    return response.data.post;
  } catch (error) {
    throw error;
  }
};

export const editPost = async (id, content, typeOfExperience) => {
  console.log(id, 'at the editing post service');
  const post = {
    id: id,
    content: content,
    typeOfExperience: typeOfExperience
  };
  try {
    const response = await apiPostService.post('/edit-post', post);
    console.log(response.data, 'here is the post that we just edited');
    return response.data.post;
  } catch (error) {
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
