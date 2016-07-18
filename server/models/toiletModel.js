var db = require('../db/db.js');

var Toilet = module.exports;

Toilet.findToiletById = function(id) {
  return db('toiletz').where({ id: id }).limit(1)
    .then(function (rows) {
      return rows[0];
    });
};

Toilet.findAllToilets = function() {
  return db('toiletz')
    .then(function (rows) {
      return rows;
    });
};

Toilet.findToiletByLocation = function(lat, long) {
  return db('toiletz').whereBetween({ latitude: lat, longitude: long }).limit(1)
    .then(function (rows) {
      return rows[0];
    });
};

Toilet.findToiletsInRadius = function(lat, long) {

  var rad = 500;

  return db('toiletz').whereBetween('latitude', [lat - rad, lat + rad]).whereBetween('longitude', [long - rad, long + rad])
    .then(function (rows) {
      return rows[0];
    });
};

Toilet.createToilet = function(attr) {
  return new Promise(function(resolve, reject) {
    return db('toiletz').insert(attr)
      .then(function(result) {
        attr.id = result[0];
        resolve(attr);
      });    
  });
};