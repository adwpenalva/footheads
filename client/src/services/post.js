import axios from 'axios';

const authorId = req.user._id;

const createPost = axios.create({
  author: authorId,
  typeOfExperience,
  content
});

const postExperience = data => {
  new Promise((resolve, reject) => {
    createPost
      .post('/blog', data)
      .then(result => {
        console.log('result', result);
        const post = result.data.post;
        console.log('new post?', post);
        resolve(post);
      })
      .catch(reject);
  });
};

export { postExperience };
