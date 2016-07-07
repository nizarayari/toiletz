module.exports = {
  '/': {
    get: function(req,res) {
      console.log("Received GET at /api/auth/");
      res.end("Received GET at /api/auth/");
    },
    post: function(req, res) {
      console.log("Received POST at /api/auth/");
      res.end("Received POST at /api/auth/");
    },
    put: function(req, res) {
      console.log("Received PUT at /api/auth/");
      res.end("Received PUT at /api/auth/");
    },
    delete: function(req, res) {
      console.log("Received DELETE at /api/auth/");
      res.end("Received DELETE at /api/auth/");
    }
  }
};