'use strict';
const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema(
  {
    club: {
      type: Number
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    content: {
      type: String,
      required: true,
      maxlength: 200,
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
const Model = mongoose.model('Comment', commentSchema);

module.exports = Model;
