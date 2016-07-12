var User = require('../models/userModel.js');
var Tag = require('../models/tagModel.js');
var Toilet = require('../models/toiletModel.js');
var Review = require('../models/reviewModel.js');

var Dummy = module.exports;
//add users

Dummy.init = function() {
  User.createUser({
    username: 'Justin',
    password: 'justinspassword',
    email: 'justin@email.com',
    gender: 'male'
  }).then(function(result) {
    console.log("created ", result.username);
  });

  User.createUser({
    username: 'Ryan',
    password: 'ryanspassword',
    email: 'ryan@email.com',
    gender: 'male'
  }).then(function(result) {
    console.log("created ", result.username);
  });

  User.createUser({
    username: 'Nizar',
    password: 'nizarspassword',
    email: 'nizar@email.com',
    gender: 'male'
  }).then(function(result) {
    console.log("created ", result.username);
  });

  User.createUser({
    username: 'Ariel',
    password: 'arielspassword',
    email: 'ariel@email.com',
    gender: 'male'
  }).then(function(result) {
    console.log("created ", result.username);
  });

  User.createUser({
    username: 'test',
    password: 'password',
    email: 'example@email.com',
    gender: 'female'
  }).then(function(result) {
    console.log("created ", result.username);
  });

  //add toilets


  //add reviews
  Review.createReview({
    description: "hallelujah, a clean toilet",
    rating: 5,
    recommend: true,
    id_Users: 1,
    id_Toiletz: 1
  })
  .then(function(result) {
    console.log("created review ", result.id);
    res.end(result);
  });

  Review.createReview({
    description: "This toilet was disgusting",
    rating: 5,
    recommend: true,
    id_Users: 2,
    id_Toiletz: 1
  })
  .then(function(result) {
    console.log("created review ", result.id);
    res.end(result);
  });

  Review.createReview({
    description: "worst. toilet. ever.",
    rating: 5,
    recommend: true,
    id_Users: 3,
    id_Toiletz: 2
  })
  .then(function(result) {
    console.log("created review ", result.id);
    res.end(result);
  });



  //add tags





}
