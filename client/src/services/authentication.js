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
        resolve();
      })
      .catch(reject);
  });

export { signUp, signIn, signOut, loadUserInformation };