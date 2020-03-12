'use strict';

const { Router } = require('express');
const router = new Router();
const { join } = require('path');
const routeGuard = require('./../middleware/route-guard');

router.get('/', (req, res, next) => {
  res.sendFile(join(__dirname, '../views', 'index.html'));
});

router.get('/private', routeGuard, (req, res, next) => {
  res.sendFile(join(__dirname, '../views', 'index.html'));
});

module.exports = router;
