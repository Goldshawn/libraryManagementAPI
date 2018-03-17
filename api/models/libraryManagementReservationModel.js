'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  Borrower_Name: {
    type: String,
    required: 'What is the Borrower Name'
  },
  Book_ID: {
    type: String,
    required: 'What is the Book_ID'
  }
  Date_Reserved:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Reservation', TaskSchema);
