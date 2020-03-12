'use strict';

const { join } = require('path');
const { Router } = require('express');

const passport = require('passport');

const router = new Router();

router.get('/sign-up', (req, res, next) => {
  res.sendFile(join(__dirname, '../views', 'authentication/sign-up.html'));
});

router.get('/sign-in', (req, res, next) => {
  res.sendFile(join(__dirname, '../views', 'authentication/sign-in.html'));
});

router.post('/sign-out', (req, res, next) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
