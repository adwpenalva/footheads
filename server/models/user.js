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
    type: String,
    unique: true
  },
  best2: {
    type: String,
    unique: true
  },
  best3: {
    type: String,
    unique: true
  },
  best4: {
    type: String,
    unique: true
  },
  best5: {
    type: String,
    unique: true
  },
  best6: {
    type: String,
    unique: true
  },
  best7: {
    type: String,
    unique: true
  },
  best8: {
    type: String,
    unique: true
  },
  best9: {
    type: String,
    unique: true
  },
  best10: {
    type: String,
    unique: true
  },
  best11: {
    type: String,
    unique: true
  }
});

module.exports = mongoose.model('User', schema);
