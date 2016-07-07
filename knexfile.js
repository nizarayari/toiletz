var path = require('path');

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      filename: path.join(__dirname, './db/toiletz.mysql')
    }
  }
};