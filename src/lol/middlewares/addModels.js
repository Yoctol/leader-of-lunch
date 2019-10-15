const db = require('knex')(require('../db/knexfile').development);
const models = require('../db/models')(db);

module.exports = async function AddModels(context, { next }){
  context.models = models;
  return next;
}