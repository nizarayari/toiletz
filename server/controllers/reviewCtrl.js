module.exports = {
  '/': {
    get: function(req,res) {
      console.log("Received GET at /api/");
      res.end("Received GET at /api/");
    },
    post: function(req, res) {
      console.log("Received POST at /api/");
      res.end("Received POST at /api/");
    },
    put: function(req, res) {
      console.log("Received PUT at /api/");
      res.end("Received PUT at /api/");
    },
    delete: function(req, res) {
      console.log("Received DELETE at /api/");
      res.end("Received DELETE at /api/");
    }
  }
};