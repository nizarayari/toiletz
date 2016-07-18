var User = require('../models/UserModel.js');
var Q = require('q');
var jwt = require('jsonwebtoken');

module.exports = {
  '/login': {
    get: function(req,res) {
      console.log("Received GET at /api/auth/login");
      res.end("Received GET at /api/auth/login");
    },
    post: function(req, res) {
      console.log("Received POST at /api/auth/login");

      // test usage
      // var password = 'password';
      // var email = 'examples@email.com';
      
      var password = req.body.password;
      var email = req.body.email;
      
      User.findUserByEmail(email)
        .then(function(user) {
          if (user) {
            console.log("user exists, checking pw");
            User.comparePasswords(user.password, password)
              .then(function(res) {
                if (res) {
                  console.log("passwords match");
                  //proceed with login methods
                
                  var token = jwt.sign(user, app.get('superSecret'), {
                  expiresInMinutes: 1440 // expires in 24 hours
                });

                // return the information including token as JSON
                res.json({
                  token: token,
                  success: true,
                  message: "Success: password and user match"
                });
                } else {
                  console.log("passwords do not match");
                  res.json({
                  success: false,
                  message: "Failure: Password does not match"
                  });
                  //throw error and have front end display warning
                }
              });
          } else {
            console.log("user does not exist");
            res.json({
              success: false,
              message: "Failure: user does not exist"
            });
            //redirect to signup page
          }
        });
    },
    put: function(req, res) {
      console.log("Received PUT at /api/auth/login");
      res.end("Received PUT at /api/auth/login");
    },
    delete: function(req, res) {
      console.log("Received DELETE at /api/auth/login");
      res.end("Received DELETE at /api/auth/login");
    }
  },
  '/signup': {
    get: function(req,res) {
      console.log("Received GET at /api/auth/signup");
      res.end("Received GET at /api/auth/signup");
    },
    post: function(req, res) {
      console.log("Received POST at /api/auth/signup");
      
      var newAccount = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        gender: req.body.gender
      };

      // test usage
      // var newAccount = {
      //   username: 'test3',
      //   password: 'password',
      //   email: 'notanemaiasdfl@email.com',
      //   gender: 'male'
      // };


      User.findUserByEmail(newAccount.email)
        .then(function(user) {      
          if (user) {
            console.log("user exists");
            res.end("Cannot create user; user already exists");
          } else {
            console.log("user does not exist");
            User.createUser(newAccount)
              .then(function(user) {
                console.log("result", user);

                //do session id/jwt stuff                
                var token = jwt.sign(user, app.get('superSecret'), {
                expiresInMinutes: 1440 // expires in 24 hours
                });

                // return the information including token as JSON
                res.json({
                  token: token, 
                  message: "Created user account for: " + user.username});
                })
              .catch(function(err) {
                res.send(err);
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