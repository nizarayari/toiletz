module.exports = {
  'signin': {
    get: function(req,res) {
      console.log("Received GET at /api/auth/signin");
      res.end("Received GET at /api/auth/signin");
    },
    post: function(req, res) {
      console.log("Received POST at /api/auth/signin");
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
      res.end("Received POST at /api/auth/signup");
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