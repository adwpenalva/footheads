import axios from 'axios';

const apiCommentService = axios.create({
  baseURL: '/api/comment'
});

export const createComment = async (id, club, content) => {
  console.log('at the comment service', id, club, content);
  const comment = {
    author: id,
    club: club,
    content: content
  };
  try {
    const response = await apiCommentService.post(`/create`, comment);
    return response.data;
  } catch (error) {
    console.log('Error', error);
    throw error;
  }
};

export const listComments = async id => {
  console.log('club id at service', id);
  const club = {
    club: id
  };
  try {
    const response = await apiCommentService.post(`/get-comments`, club);
    console.log(response.data, 'here is the services return NEW');
    return response.data.comments;
  } catch (error) {
    //  console.log('I didnt add the post in service due to', error)
    throw error;
  }
};

export const deleteComment = async id => {
  console.log(id, 'at the delete service');
  const comment = {
    id: id
  };
  try {
    const response = await apiCommentService.post(`/delete-comment`, comment);
    console.log(response.data, 'here is the deleted comment');
    return response;
  } catch (error) {
    throw error;
  }
};
