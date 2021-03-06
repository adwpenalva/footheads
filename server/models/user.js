'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  passwordHash: {
    type: String
  },
  githubToken: {
    type: String
  },
  favoritePlayer: {
    type: String
  },
  favoriteTeam: {
    type: String
  },
  picture: {
    type: String,
    trim: true,
    default:
      'https://res.cloudinary.com/footheads/image/upload/v1584358980/avatar/soccer-ball-head_lywxii.jpg'
  },
  bio: {
    type: String
  },
  best1: {
    type: String
  },
  best2: {
    type: String
  },
  best3: {
    type: String
  },
  best4: {
    type: String
  },
  best5: {
    type: String
  },
  best6: {
    type: String
  },
  best7: {
    type: String
  },
  best8: {
    type: String
  },
  best9: {
    type: String
  },
  best10: {
    type: String
  },
  best11: {
    type: String
  }
});

module.exports = mongoose.model('User', schema);
