import axios from 'axios';

const instance = axios.create({
  baseURL: '/api/authentication'
});

const loadUserInformation = () =>
  new Promise((resolve, reject) => {
    instance
      .get('/user-information')
      .then(result => {
        const user = result.data.user;
        resolve(user);
      })
      .catch(reject);
  });

const signUp = data => {
  console.log('form data', data);
  return new Promise((resolve, reject) => {
    instance
      .post('/sign-up', data)
      .then(result => {
        console.log('result', result);
        const user = result.data.user;
        console.log('new user in service?', user);
        resolve(user);
      })
      .catch(reject);
  });
};

const signIn = data =>
  new Promise((resolve, reject) => {
    instance
      .post('/sign-in', data)
      .then(result => {
        const user = result.data.user;
        console.log('Output of service', user);
        resolve(user);
      })
      .catch(reject);
  });

const signOut = () =>
  new Promise((resolve, reject) => {
    instance
      .post('/sign-out')
      .then(result => {
        console.log('user has signed out');
        resolve(result);
      })
      .catch(reject);
  });

const editUserInformation = async data => {
  const form = new FormData();
  form.append('name', data.name);
  form.append('email', data.email);
  form.append('picture', data.picture);
  form.append('favoritePlayer', data.favoritePlayer);
  form.append('bio', data.bio);
  form.append('favoriteTeam', data.favoriteTeam);
  form.append('best1', data.best1);
  form.append('best2', data.best2);
  form.append('best3', data.best3);
  form.append('best4', data.best4);
  form.append('best5', data.best5);
  form.append('best6', data.best6);
  form.append('best7', data.best7);
  form.append('best8', data.best8);
  form.append('best9', data.best9);
  form.append('best10', data.best10);
  form.append('best11', data.best11);
  const result = await instance.patch('/user-information', form);
  const user = result.data.user;
  return user;
};

export { signUp, signIn, signOut, loadUserInformation, editUserInformation };
