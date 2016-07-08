var db = require('../db/db.js');
var bcrypt = require('bcrypt');

var User = module.exports;

User.findUserByUsername = function(username) {
  return db('users').where({ username: username }).limit(1)
    .then(function (rows) {
      return rows[0];
    });
};

User.findUserById = function(id) {
  return db('users').where({ id: id }).limit(1)
    .then(function (rows) {
      return rows[0];
    });
};

User.findUserByEmail = function(email) {
  return db('users').where({ email: email }).limit(1)
    .then(function (rows) {
      return rows[0];
    });
};

User.createUser = function(attr) {
  return new Promise(function(resolve, reject) {
    return hashPassword(attr.password)
      .then(function(hashObj) {
        attr.password = hashObj.hash;
        attr.salt = hashObj.salt;
      })
      .then(function(){
        return db('users').insert(attr)
          .then(function(result) {
            attr.id = result[0];
            delete attr.password;
            resolve(attr);
          });    
      });
  });
  
};

function hashPassword(pw) {
  console.log("hashing password");
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

User.comparePasswords = function(hashedPw, attempt) {
  return new Promise(function(resolve, reject) {
    bcrypt.compare(attempt, hashedPw, function(err, res) {
      if (err) return reject(err);
      resolve(res);
    });
  });
}