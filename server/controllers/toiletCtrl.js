var Toilet = require('../models/toiletModel.js');
var User = require('../models/userModel.js');

module.exports = {
  '/': {
    get: function(req,res) {
      console.log("Received GET at /api/toilet/");
      res.end("Received GET at /api/toilet/");
    },
    post: function(req, res) {
      console.log("Received POST at /api/toilet/");
      console.log("creating toilet");

      //need user id as an input

      var newToilet = {
        description: "a new toilet",
        id_Users: 15,
        location: 'santa monica'

      };

      Toilet.findToiletByLocation(newToilet.location)
        .then(function(toilet) {
          if (toilet) {
            console.log("toilet already added"); 
          } else {
            console.log("toilet does not exist");

            Toilet.createToilet(newToilet)
              .then(function(result) {
                console.log("result", result);

                res.end(result);
              });
          }
        });

      res.end("Received POST at /api/toilet/");
    },
    put: function(req, res) {
      console.log("Received PUT at /api/toilet/");
      res.end("Received PUT at /api/toilet/");
    },
    delete: function(req, res) {
      console.log("Received DELETE at /api/toilet/");
      res.end("Received DELETE at /api/toilet/");
    }
  },
  ':toiletId': {
    get: function(req,res) {
      console.log("Received GET at /api/toilet/:toiletId");
      res.end("Received GET at /api/toilet/:toiletId");
    },
    post: function(req, res) {
      console.log("Received POST at /api/toilet/:toiletId");
      res.end("Received POST at /api/toilet/:toiletId");
    },
    put: function(req, res) {
      console.log("Received PUT at /api/toilet/:toiletId");
      res.end("Received PUT at /api/toilet/:toiletId");
    },
    delete: function(req, res) {
      console.log("Received DELETE at /api/toilet/:toiletId");
      res.end("Received DELETE at /api/toilet/:toiletId");
    }
  }
};