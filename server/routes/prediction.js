'use strict';

const { Router } = require('express');
const router = new Router();
const routeGuard = require('./../middleware/route-guard');

const Prediction = require('./../models/predictScore');

router.post('/post-prediction', async (req, res, next) => {
  console.log('chegou ao servidor');
  console.log('req body', req.body);
  //we will need to make sure that a user does not predict twice.
  try {
    const postPrediction = await Prediction.create({
      userId: req.user._id,
      matchId: req.body.matchId,
      prediction: req.body.prediction
    });
    res.json({ postPrediction });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get('/get-predictions/:matchId', async (req, res, next) => {
  console.log('here at the get predictions server');
  try {
    const userId = req.user._id;
    const matchId = req.params.matchId;
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

module.exports = router;
