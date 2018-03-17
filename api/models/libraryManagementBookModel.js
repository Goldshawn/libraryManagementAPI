'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  Book_ID: {
    type: String,
    required: 'What is the Book_ID'
  },
  Book_ISBN: {
    type: String,
    required: 'What is the Book_ISBN'
  },
  Book_Title: {
    type: String,
    required: 'What is the Book_Title'
  },
  Book_Author: {
    type: String,
    required: 'Who is the Author of the Book'
  }
});

module.exports = mongoose.model('Book', TaskSchema);
