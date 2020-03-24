'use strict';

const { Router } = require('express');
const router = new Router();
const routeGuard = require('./../middleware/route-guard');
const User = require('./../models/user');

router.get('/:userId', (req, res, next) => {
  const userId = req.params.userId;

  User.find({ _id: userId })
    .then(document => {
      console.log('ROUtE CONSOLE LOG:', document);
      res.json({ document });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
