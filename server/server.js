var express = require('express');
var bodyParser = require('body-parser');
var moment = require('moment');
var app = express();
var morgan = require('morgan');
// var dotenv = require('dotenv');
var path = require('path');
var jwt = require('jsonwebtoken');

var dotenv = require('dotenv').config();

// dotenv.load();
var db = require('./db/db.js');


var routesReview = require('./routes/routesReview.js');
var routesUser = require('./routes/routesUser.js');
var routesToilet = require('./routes/routesToilets.js');
var routesAuth = require('./routes/routesAuth.js');
var routesTag = require('./routes/routesTag.js');

app.use(bodyParser.json());

app.use(morgan('dev'));

// route middleware to verify a token
var tokenCheck = function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, process.env.secret, function(err, decoded) {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;    
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });
    
  }
};

app.use(express.static('../src'));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version, X-File-Name');
  next();
});

//Routing
app.use('/api/review', tokenCheck, routesReview);
app.use('/api/user', tokenCheck, routesUser);
app.use('/api/toilet', tokenCheck, routesToilet);
app.use('/api/auth', routesAuth);
app.use('/api/tag', tokenCheck, routesTag);

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, '../src', 'index.html'));
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
  db.ensureSchema();
  console.log(moment().format('h:mm:ss a') + ': Express Server listening on port', app.get('port'));
});