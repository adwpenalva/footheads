'use strict';
const mongoose = require('mongoose');
const postSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    typeOfExperience: {
      type: String,
      required: true,
      enum: ['In-game', 'In the stands', 'At the pub', 'At home', 'Other']
    },
    content: {
      type: String,
      required: true,
      maxlength: 400,
      trim: true
    }
  },
  {
    timestamps: {
      createdAt: 'creationDate',
      updatedAt: 'updateDate'
    }
  }
);
const Model = mongoose.model('Post', postSchema);

module.exports = Model;
