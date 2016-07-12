var Review = require('../models/reviewModel.js');
var Toilet = require('../models/toiletModel.js');
var url = require('url');


module.exports = {
  '/': {
    get: function(req,res) {
      console.log("Received GET at /api/review");
      res.end("Received GET at /api/review");
    },
    post: function(req, res) {
      console.log("Received POST at /api/review");
      console.log("creating review");

      console.log(req.body);

      var newReview = {
        description: "hallelujah, a clean toilet",
        rating: 5,
        recommend: true,
        id_Users: 15,
        id_Toiletz: 2
      };

      Review.findReviewForToiletbyUser(newReview.id_Toiletz, newReview.id_Users)
        .then(function (review) {
          if (review) {
            console.log("review for toilet ", newReview.id_Toiletz, " by user",newReview.id_Users,"already exists");
          } else {
            console.log("review doesn't exist, creating now");
            Review.createReview(newReview)
              .then(function(result) {
                console.log("result", result);

                res.end(result);
              });
          }
        });


      res.end("Received POST at /api/review");
    },
    put: function(req, res) {
      console.log("Received PUT at /api/review");
      res.end("Received PUT at /api/review");
    },
    delete: function(req, res) {
      console.log("Received DELETE at /api/review");
      res.end("Received DELETE at /api/review");
    }
  },
  '/toilet/:toiletId': {
    get: function(req,res) {
      console.log("Received GET at /api/review/toilet/:reviewId");
      console.log("getting all reviews for a toilet");

      var toiletID = url.parse(req.url,true).path.split('/toilet/')[1];

      Review.findReviewsByToilet(toiletID)
        .then(function(reviews) {
          console.log("these are the reviews", reviews);
          if (reviews.length === 0) {
            console.log("reviews do not exist");
            res.end("Received GET at /api/review/toilet/:reviewId");
          } else {
            console.log("there are reviews, return them");
            res.send(reviews);
          }
        });

    },
    post: function(req, res) {
      console.log("Received POST at /api/:reviewId");
      res.end("Received POST at /api/:reviewId");
    },
    put: function(req, res) {
      console.log("Received PUT at /api/:reviewId");
      res.end("Received PUT at /api/:reviewId");
    },
    delete: function(req, res) {
      console.log("Received DELETE at /api/:reviewId");
      res.end("Received DELETE at /api/:reviewId");
    }
  },
  '/user/:userId': {
    get: function(req,res) {
      console.log("Received GET at /api/review/toilet/:reviewId");
      console.log("getting all reviews for a toilet by a user");

      var userId = url.parse(req.url,true).path.split('/user/')[1];
      console.log("getting review for user", userId);

      Review.findReviewsByUser(userId)
        .then(function(review) {
          console.log("this is the review", review);
          if (!review) {
            console.log("review does not exist");
            res.end("Received GET at /api/review/toilet/" + userId);
          } else {
            console.log("this review exists, return it");
            res.send(review);
          }
        });

    },
    post: function(req, res) {
      console.log("Received POST at /api/:reviewId");
      res.end("Received POST at /api/:reviewId");
    },
    put: function(req, res) {
      console.log("Received PUT at /api/:reviewId");
      res.end("Received PUT at /api/:reviewId");
    },
    delete: function(req, res) {
      console.log("Received DELETE at /api/:reviewId");
      res.end("Received DELETE at /api/:reviewId");
    }
  },
  '/:reviewId': {
    get: function(req,res) {
      console.log("Received GET at /api/:reviewId");

      var reviewID = url.parse(req.url, true).path.slice(1);
      console.log("getting review for", reviewID);

      Review.findReviewById(reviewID)
        .then(function(review) {
          console.log("this is the review", review);
          if (!review) {
            console.log("review does not exist");
            res.end("Received GET at /api/review/toilet/" + reviewID);
          } else {
            console.log("this review exists, return it");
            res.send(review);
          }

        });
    },
    post: function(req, res) {
      console.log("Received POST at /api/:reviewId");
      res.end("Received POST at /api/:reviewId");
    },
    put: function(req, res) {
      console.log("Received PUT at /api/:reviewId");
      res.end("Received PUT at /api/:reviewId");
    },
    delete: function(req, res) {
      console.log("Received DELETE at /api/:reviewId");
      res.end("Received DELETE at /api/:reviewId");
    }
  }
};