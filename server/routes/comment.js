'use strict';

const { Router } = require('express');
const router = new Router();
const routeGuard = require('./../middleware/route-guard');

const Comment = require('./../models/comment');

router.post('/create', async (req, res, next) => {
  console.log('req body', req.body);
  try {
    await Comment.create({
      author: req.body.author,
      content: req.body.content,
      club: req.body.club
    })
      .then(comment => {
        res.json({ comment });
      })
      .catch(err => {
        console.log('error', err);
      });
  } catch (error) {
    console.log('error', error);
    next(error);
  }
});

router.post('/get-comments', async (req, res, next) => {
  console.log('here', req.body);
  try {
    await Comment.find({ club: req.body.club })
      .populate('author')
      .sort({ time: -1 })
      .then(comments => {
        console.log(comments);
        res.json({ comments });
      })
      .catch(error => {
        console.log('Didnt get the comments', error);
        next(error);
      });
  } catch (error) {
    console.log('Main error on getting the posts', error);
    next(error);
  }
});

module.exports = router;
