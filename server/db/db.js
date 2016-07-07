var path = require('path');

var config = require('../knexfile.js');
var env = process.env.NODE_ENV || 'development';
var knex = require('knex')(config[env]);

module.exports = knex;

knex.deleteEverything = function () {

  return knex('users').truncate()
    .then(function () {
      return knex('toiletz').truncate();
    })
    .then(function () {
      return knex('reviews').truncate();
    })
    .then(function () {
      return knex('tags').truncate();
    })
    .then(function () {
      return knex('toiletz_tags').truncate();
    })
    .then(function () {
      return knex('users_favs').truncate();
    });
};

// build schema below
knex.ensureSchema = function () {
  return Promise.all([
    knex.schema.hasTable('users').then(function(exists) {
      if (!exists) {
        knex.schema.createTable('users', function (table) {
          table.increments('id').primary();
          table.string('username', 255);
          table.string('email', 255);
          table.string('gender', 100);
          table.timestamps();
        }).then(function (table) {
          console.log('Created users table.');
        });
      }
    }),

    knex.schema.hasTable('toiletz').then(function(exists) {
      if (!exists) {
        knex.schema.createTable('toiletz', function (table) {
          table.increments('id').primary();
          table.string('location', 255);
          table.text('description', 255);
          table.integer('id_Users').references('users.id');
          table.timestamps();
        }).then(function (table) {
          console.log('Created toiletz table.');
        });
      }
    }),

    knex.schema.hasTable('reviews').then(function(exists) {
      if (!exists) {
        knex.schema.createTable('reviews', function (table) {
          table.increments('id').primary();
          table.text('description');
          table.integer('rating');
          table.boolean('recommend');
          table.integer('id_Users').references('users.id');
          table.integer('id_Toiletz').references('toiletz.id');
        }).then(function (table) {
          console.log('Created reviews table.');
        });
      }
    }),

    knex.schema.hasTable('tags').then(function(exists) {
      if (!exists) {
        knex.schema.createTable('tags', function (table) {
          table.increments('id').primary();
          table.string('tagname', 100);
        }).then(function (table) {
          console.log('Created tags table.');
        });
      }
    }),

    knex.schema.hasTable('toiletz_tags').then(function(exists) {
      if (!exists) {
        knex.schema.createTable('toiletz_tags', function (table) {
          table.increments('id').primary();
          table.integer('id_Toiletz').references('toiletz.id');
          table.integer('id_Tags').references('tags.id');
        }).then(function (table) {
          console.log('Created toiletz_tags table.');
        });
      }
    }),

    knex.schema.hasTable('users_favs').then(function(exists) {
      if (!exists) {
        knex.schema.createTable('users_favs', function (table) {
          table.increments('id').primary();
          table.integer('id_Users').references('users.id');
          table.integer('id_Toiletz').references('toiletz.id');
        }).then(function (table) {
          console.log('Created users_favs table.');
        });
      }
    })



  ]);
};