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
  }
};