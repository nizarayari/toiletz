module.exports = {
  '/': {
    get: function(req,res) {
      console.log("Received GET at /api/review");
      res.end("Received GET at /api/review");
    },
    post: function(req, res) {
      console.log("Received POST at /api/review");
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
  ':reviewId': {
    get: function(req,res) {
      console.log("Received GET at /api/:reviewId");
      res.end("Received GET at /api/:reviewId");
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