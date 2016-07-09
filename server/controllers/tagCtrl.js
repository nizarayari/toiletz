var User = require('../models/userModel.js');
var Tag = require('../models/tagModel.js');
var Q = require('q');

module.exports = {
  '/': {
    get: function(req,res) {
      console.log("Received GET at /api/tag/");
      console.log("returning all available tag options");

      Tag.findAllTags()
        .then(function(tags) {
          console.log(tags);
          if (!tags || tags.length === 0) {
            console.log("no tags exist yet");
            res.end("no tags exist yet");
          } else {
            console.log("tags exist");
            res.send(tags);
          }
        });
      res.send("Received GET at /api/tag/");
    },
    post: function(req, res) {
      console.log("Received POST at /api/tag/");
      console.log("adding a new tag");

      Tag.findTagByName(tagName)
        .then(function(tag) {
          if (toilet) {
            console.log("tag already added"); 
            res.send("tag already added"); 
          } else {
            console.log("tag does not exist");

            Tag.createTag(tagName)
              .then(function(result) {
                console.log("result", result);

                res.send(result);
              });
          }
        });
    },
    put: function(req, res) {
      console.log("Received PUT at /api/tag/");
      res.end("Received PUT at /api/tag/");
    },
    delete: function(req, res) {
      console.log("Received DELETE at /api/tag/");
      res.end("Received DELETE at /api/tag/");
    }
  },
  ':tagId': {
    get: function(req,res) {
      console.log("Received GET at /api/:tagId");

      var tagID = url.parse(req.url,true).path.slice(1);

      res.end("Received GET at /api/:tagId");
    },
    post: function(req, res) {
      console.log("Received POST at /api/:tagId");
      res.end("Received POST at /api/:tagId");
    },
    put: function(req, res) {
      console.log("Received PUT at /api/:tagId");
      res.end("Received PUT at /api/:tagId");
    },
    delete: function(req, res) {
      console.log("Received DELETE at /api/:tagId");
      res.end("Received DELETE at /api/:tagId");
    }
  }
};