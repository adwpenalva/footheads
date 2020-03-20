'use strict';

const { Router } = require('express');
const router = new Router();
const routeGuard = require('./../middleware/route-guard');

const Comment = require('./../models/comment');

router.post('/create', async (req, res, next) => {
  console.log('req body', req.body);
  try {
    await Comment.create({
      author: req.user._id,
      content: req.body.content,
      club: req.body.club
    })
      .then(comment => {
        return Comment.populate(comment, 'author');
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
      .sort({ creationDate: -1 })
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

router.post('/delete-comment', async (req, res, next) => {
  console.log('here is req.body', req.body);
  try {
    await Comment.findByIdAndDelete({ _id: req.body.id })
      .then(() => {
        res.json({});
      })
      .catch(error => {
        console.log('Didnt delete', error);
        next(error);
      });
  } catch (error) {
    console.log('Main error for delete', error);
    next(error);
  }
});

module.exports = router;
