var User = require('../models/UserModel.js');
var Q = require('q');

module.exports = {
  'signin': {
    get: function(req,res) {
      console.log("Received GET at /api/auth/signin");
      res.end("Received GET at /api/auth/signin");
    },
    post: function(req, res) {
      console.log("Received POST at /api/auth/signin");

      var password = 'password';
      var email = 'examples@email.com';
      User.findUserByEmail(email)
        .then(function(user) {
          if (user) {
            console.log("user exists, checking pw");
            User.comparePasswords(user.password, password)
              .then(function(res) {
                if (res) {
                  console.log("passwords match");
                  //proceed with login methods
                } else {
                  console.log("passwords do not match");
                  //throw error and have front end display warning
                }
              });
          } else {
            console.log("user does not exist");
            //redirect to signup page
          }
        });



      res.end("Received POST at /api/auth/signin");
    },
    put: function(req, res) {
      console.log("Received PUT at /api/auth/signin");
      res.end("Received PUT at /api/auth/signin");
    },
    delete: function(req, res) {
      console.log("Received DELETE at /api/auth/signin");
      res.end("Received DELETE at /api/auth/signin");
    }
  },
  'signup': {
    get: function(req,res) {
      console.log("Received GET at /api/auth/signup");
      res.end("Received GET at /api/auth/signup");
    },
    post: function(req, res) {
      console.log("Received POST at /api/auth/signup");
      
      var email = 'examples@email.com';

      User.findUserByEmail(email)
        .then(function(user) {      
          if (user) {
            console.log("user exists");
            res.end("Cannot create user; user already exists");
          } else {
            console.log("user does not exist");
            User.createUser({
              username: 'test',
              password: 'password',
              email: 'examples@email.com',
              gender: 'male'
            }).then(function(result) {
              console.log("result", result);

              //do session id/jwt stuff
              res.end("Received POST at /api/auth/signup");
            });
          }

        });
      
      
    },
    put: function(req, res) {
      console.log("Received PUT at /api/auth/signup");
      res.end("Received PUT at /api/auth/signup");
    },
    delete: function(req, res) {
      console.log("Received DELETE at /api/auth/signup");
      res.end("Received DELETE at /api/auth/signup");
    }
  }
};