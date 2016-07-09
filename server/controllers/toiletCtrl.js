var Toilet = require('../models/toiletModel.js');
var User = require('../models/userModel.js');
var url = require('url');

module.exports = {
  '/': {
    get: function(req,res) {
      console.log("Received GET at /api/toilet/");
      console.log("getting all toilets")

      Toilet.findAllToilets()
        .then(function(toilets) {
          if (toilets.length === 0) {
            console.log("no toilets exist yet");
            res.end("no toilets exist yet");
          } else {
            console.log("toilets exist");
            res.send(toilets);
          }
        });
    },
    post: function(req, res) {
      console.log("Received POST at /api/toilet/");
      console.log("creating toilet");

      var newToilet = {
        description: req.body.description,
        id_Users: req.body.id_Users,
        location: req.body.location
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

      var toiletID = url.parse(req.url,true).path.slice(1);

      Toilet.findToiletById(toiletID)
        .then(function(toilet) {
          if (toilet) {
            console.log("toilet", toiletID, "was found, returning");
            res.send(toilet);
          } else {
            console.log("toilet", toiletID, "was not found");
            res.end("toilet " + toiletID + " was not found");
          }
        });
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