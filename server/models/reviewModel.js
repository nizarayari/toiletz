var db = require('../db/db.js');

var Review = module.exports;

//find one review based on review id
Review.findReviewById = function(id) {
  return db('reviews').where({ id: id }).limit(1)
    .then(function (rows) {
      return rows[0];
    });
};

//find all reviews by a given user id
Review.findReviewsByUser = function(id) {
  return db('reviews').where({ id_Users: id })
    .then(function (rows) {
      return rows;
    });
};

//find all reviews for a given toilet id
Review.findReviewsByToilet = function(id) {
  return db('reviews').where({ id_Toiletz: id })
    .then(function (rows) {
      return rows;
    });
};

//find review for a toilet by a specific user
Review.findReviewForToiletbyUser = function(toiletID, userID) {
  return db('reviews').where({id_Toiletz: toiletID, id_Users: userID}).limit(1)
    .then(function(rows) {
      return rows[0];
    });
};

//create review for toilet in attr
Review.createReview = function(attr) {
  return new Promise(function(resolve, reject) {
    return db('reviews').insert(attr)
      .then(function(result) {
        attr.id = result[0];
        resolve(attr);
      });    
  });
};