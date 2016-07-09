var db = require('../db/db.js');

var Tag = module.exports;

//find one review based on review id
Tag.findTagByName = function(tagName) {
  return db('tags').where({ tagname: tagName }).limit(1)
    .then(function (rows) {
      return rows[0];
    });
};

Tag.findAllTags = function() {
  return db('tags')
    .then(function (rows) {
      return rows[0];
    });
};

//create review for toilet in attr
Tag.createTag = function(attr) {
  return new Promise(function(resolve, reject) {
    return db('tags').insert(attr)
      .then(function(result) {
        attr.id = result[0];
        resolve(attr);
      });    
  });
};