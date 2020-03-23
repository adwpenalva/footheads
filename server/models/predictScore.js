'use strict';
const mongoose = require('mongoose');
const predictScoreSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  matchId: {
    type:"String",
    required: true
  },
  prediction: {
    type: String,
    enum: ['Home', 'Draw', 'Away'],
    required: true
  }
});
const Model = mongoose.model('PredictScore', predictScoreSchema);

module.exports = Model;
