var db = require('../db/db.js');
var bcrypt = require('bcrypt');

var User = module.exports;

User.createUser = function(attr) {

  console.log("inserting new user: ", attr);

  return hashPassword(attr.password)
    .then(function(hashObj) {
      attr.password = hashObj.hash;
      attr.salt = hashObj.salt;
    })
    .then(function(){
      return db('users').insert(attr)
        .then(function(result) {
          attr.id = result[0];
          delete attrs.password;
          return attr;
        });    
    });

};

function hashPassword(pw) {
  return new Promise(function(resolve, reject) {

    return bcrypt.genSalt(10, function(err, salt) {
      if (err) {
        return next(err);
      }

      bcrypt.hash(pw, salt, function(err, hash) {
        if (err) {
          return next(err);
        }

        resolve({
          salt: salt,
          hash: hash
        });
      });

    });

  });
  
}