'use strict';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true
  },
  passwordHash: {
    type: String
  },
  picture: {
    type: String,
    default:
      'https://res.cloudinary.com/footheads/image/upload/v1584358980/avatar/soccer-ball-head_lywxii.jpg'
  },
  favTeam: [
    {
      type: String
    }
  ],
  favPlayer: {
    type: String
  },
  comments: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }
});

module.exports = mongoose.model('User', userSchema);
