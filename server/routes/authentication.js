'use strict';

const { Router } = require('express');

const passport = require('passport');
const User = require('./../models/user');
const router = new Router();

router.get('/user-information', (req, res, next) => {
  res.json({ user: req.user || null });
});

router.post(
  '/sign-up',
  passport.authenticate('local-sign-up', {
    successRedirect: '/api/authentication/user-information',
    failureRedirect: '/sign-up'
  })
);

router.post(
  '/sign-up',
  passport.authenticate('github', {
    successRedirect: '/api/authentication/user-information',
    failureRedirect: '/sign-up'
  })
);

router.post(
  '/sign-in',
  passport.authenticate('local-sign-in', {
    successRedirect: '/api/authentication/user-information',
    failureRedirect: '/sign-in'
  })
);

router.get(
  '/github',
  passport.authenticate('github', {
    successRedirect: '/api/authentication/user-information',
    failureRedirect: '/authentication/sign-in'
  })
);

router.get(
  '/github-callback',
  passport.authenticate('github', {
    successRedirect: '/api/authentication/user-information',
    failureRedirect: '/authentication/sign-in'
  })
);

router.get('/user-information', (req, res, next) => {
  const user = req.user;
  res.json({ user });
});

router.post('/sign-out', (req, res, next) => {
  console.log('reached signout');
  req.session.destroy();
  req.logout();
  res.json({});
});

const uploader = require('./../multer-configure');

router.patch('/user-information', uploader.single('picture'), async (req, res, next) => {
  const { email, name } = req.body;
  let picture;
  if (req.file) picture = req.file.url;
  try {
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { name, email, ...(picture ? { picture } : {}) },
      { new: true }
    );
    res.json({ user });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
