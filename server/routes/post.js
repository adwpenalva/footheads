'use strict';

const { Router } = require('express');
const router = new Router();
const routeGuard = require('./../middleware/route-guard');

const Post = require('./../models/post');

router.post('/create', async (req, res, next) => {
  console.log('req body', req.body);
  try {
    const post = await Post.create({
      author: req.user._id,
      content: req.body.content,
      typeOfExperience: req.body.typeOfExperience
    });
    res.json({ post });
  } catch (error) {
    console.log('error', error);
    next(error);
  }
});

router.get('/get-posts', async (req, res, next) => {
  console.log('here at the get posts server');
  try {
    Post.find()
      .populate('author')
      .sort({ creationDate: -1 })
      .then(posts => {
        console.log(posts);
        res.json({ posts });
      })
      .catch(error => {
        console.log('Didnt get the posts', error);
        next(error);
      });
  } catch (error) {
    console.log('Main error on getting the posts', error);
    next(error);
  }
});

router.post('/delete-post', async (req, res, next) => {
  console.log('here is req.body', req.body);
  try {
    await Post.findByIdAndDelete({ _id: req.body.id })
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

router.post('/find-post', async (req, res, next) => {
  try {
    await Post.findById(req.body.id)
      .then(post => {
        res.json({ post });
      })
      .catch(error => {
        console.log('Didnt edited', error);
        next(error);
      });
  } catch (error) {
    console.log('Main error for not finding', error);
    next(error);
  }
});

router.post('/edit-post', async (req, res, next) => {
  console.log('this is the req body console.log', req.body);
  try {
    await Post.findByIdAndUpdate(req.body.id, {
      content: req.body.content,
      typeOfExperience: req.body.typeOfExperience
    })
      .then(post => {
        res.json({ post });
      })
      .catch(error => {
        console.log('Couldnt edit in the blog view', error);
        next(error);
      });
  } catch (error) {
    console.log('Main error for not being able to edit the post on the blog view', error);
    next(error);
  }
});

module.exports = router;
