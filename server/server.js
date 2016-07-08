var express = require('express');
var bodyParser = require('body-parser');
var moment = require('moment');
var app = express();
var morgan = require('morgan');
var dotenv = require('dotenv');

dotenv.load();
var db = require('./db/db.js');


var routesReview = require('./routes/routesReview.js');
var routesUser = require('./routes/routesUser.js');
var routesTicket = require('./routes/routesToilets.js');
var routesAuth = require('./routes/routesAuth.js');

app.use(bodyParser.json());

app.use(morgan('dev'));

app.use(express.static('./client'));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version, X-File-Name');
  next();
});

//Routing
app.use('/api/review', routesReview);
app.use('/api/user', routesUser);
app.use('/api/ticket', routesTicket);
app.use('/api/auth', routesAuth);

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
  db.ensureSchema();
  console.log(moment().format('h:mm:ss a') + ': Express Server listening on port', app.get('port'));
});