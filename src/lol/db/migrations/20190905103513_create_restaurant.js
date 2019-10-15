
exports.up = function(knex) {
  return knex.schema
    .createTable('channels', function (table) {
      table.increments('id').primary();
      table.string('key', 100).notNullable();
      table.timestamps();
    })
    .createTable('restaurants', function (table) {
      table.increments('id').primary();
      table.string('name', 100).notNullable();
      table.integer('channel_id').unsigned().references('channels.id').notNullable();
      table.timestamps();
    })
    .createTable('elections', function (table) {
      table.increments('id').primary();
      table.integer('channel_id').unsigned().references('channels.id').notNullable();
      table.timestamps();
    })
    .createTable('election_options', function (table) {
      table.increments('id').primary();
      table.integer('index').unsigned().notNullable();
      table.integer('election_id').unsigned().references('elections.id').notNullable();
      table.integer('restaurant_id').unsigned().references('restaurants.id').notNullable();
      table.timestamps();
    })
    .createTable('users', function (table) {
      table.increments('id').primary();
      table.string('key', 100).notNullable();
      table.string('name', 100);
      table.timestamps();
    })
    .createTable('votes', function (table) {
      table.increments('id').primary();
      table.integer('election_option_id').unsigned().references('election_options.id').notNullable();
      table.integer('user_id').unsigned().references('users.id').notNullable();
      table.timestamps();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable("votes")
    .dropTable("users")
    .dropTable("election_options")
    .dropTable("elections")
    .dropTable("restaurants")
    .dropTable("channels");
};
