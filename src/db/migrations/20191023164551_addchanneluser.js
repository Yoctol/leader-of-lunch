
exports.up = function(knex) {
  return knex.schema
    .createTable('channel_users', function(table) {
      table.integer('channel_id').unsigned().references('channels.id');
      table.integer('user_id').unsigned().references('users.id');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('channel_users')
};
