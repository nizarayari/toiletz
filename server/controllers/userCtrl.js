var User = require('../models/userModel.js');
var Q = require('q');

module.exports = {
  '/': {
    get: function(req,res) {
      console.log("Received GET at /api/user/");
      res.end("Received GET at /api/user/");
    },
    post: function(req, res) {
      console.log("Received POST at /api/user/");
      res.end("Received POST at /api/user/");
    },
    put: function(req, res) {
      console.log("Received PUT at /api/user/");
      res.end("Received PUT at /api/user/");
    },
    delete: function(req, res) {
      console.log("Received DELETE at /api/user/");
      res.end("Received DELETE at /api/user/");
    }
  },
  '/:userId': {
    get: function(req,res) {
      console.log("Received GET at /api/:userId");
      res.end("Received GET at /api/:userId");
    },
    post: function(req, res) {
      console.log("Received POST at /api/:userId");
      res.end("Received POST at /api/:userId");
    },
    put: function(req, res) {
      console.log("Received PUT at /api/:userId");
      res.end("Received PUT at /api/:userId");
    },
    delete: function(req, res) {
      console.log("Received DELETE at /api/:userId");
      res.end("Received DELETE at /api/:userId");
    }
  }
};