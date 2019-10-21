
exports.up = function(knex) {
  return knex.schema
    .table('restaurants', function (table) {
      table.datetime('deleted_at').nullable();
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('restaurants', function (table) {
      table.dropColumn('deleted_at')
    })
};
