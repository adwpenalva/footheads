'use strict';

const { Router } = require('express');
const router = new Router();
const routeGuard = require('./../middleware/route-guard');

const Prediction = require('./../models/predictScore');

router.post('/post-prediction', async (req, res, next) => {
  const userId = req.body.userId;
  const matchId = req.body.matchId;

  const searchQuery = {
    userId,
    matchId
  };

  console.log(searchQuery)
  try {
    const postedPrediction = await Prediction.find(searchQuery);
    console.log(postedPrediction)
    if (!postedPrediction.length) {
      const postPrediction = await Prediction.create({
        userId: req.body.userId,
        matchId: req.body.matchId,
        prediction: req.body.prediction
      });
      res.json({ postPrediction });
    } else {
      res.json({ message: 'user already predicted this match.' });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get('/get-predictions/:userId/:matchId', async (req, res, next) => {
  console.log('here at the get predictions server');
  try {
    const userId = req.params.userId;
    const matchId = req.params.matchId;
    // console.log(userId);
    // console.log(req.user);
    const searchQuery = {
      userId,
      matchId
    };
    Prediction.find(searchQuery)
      .then(prediction => {
        console.log(prediction);
        res.json({ prediction });
      })
      .catch(error => {
        console.log('Didnt get the predictions', error);
        next(error);
      });
  } catch (error) {
    console.log('Main error on getting the predictions', error);
    next(error);
  }
});

//get router for all predictions for a match

router.get('/get-predictions/:matchId', async (req, res, next) => {
  try {
    const matchId = req.params.matchId;
    Prediction.find({ matchId })
      .then(prediction => {
        console.log(prediction);
        res.json({ prediction });
      })
      .catch(error => {
        console.log('Didnt get the predictions', error);
        next(error);
      });
  } catch (error) {
    console.log('Main error on getting the predictions', error);
    next(error);
  }
});

module.exports = router;
