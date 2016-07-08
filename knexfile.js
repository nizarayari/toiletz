var path = require('path');

module.exports = {

  development: {
    client: 'mysql',
    connection: {
        host     : 'toiletz.justinpchen.com',
        user     : process.env.db_username,
        password : process.env.db_password,
        database : 'toiletz',
        charset  : 'utf8'
  }}
};
