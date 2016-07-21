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
  return db('toiletz').where({ latitude: lat, longitude: long }).limit(1)
    .then(function (rows) {
      return rows[0];
    });
};

Toilet.findToiletsInRadius = function(lat, long) {

  console.log("inside toilets in radius");
  var rad = 0.015;

  console.log("lat", lat);
  console.log("long", long);

  return db('toiletz').whereBetween('latitude', [lat - rad, lat + rad])
  .andWhereBetween('longitude', [long - rad, long + rad])
    .then(function (rows) {
      console.log('rows in findToilets in radius', rows)
      return rows;
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
