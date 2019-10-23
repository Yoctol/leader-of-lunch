const { chain } = require('bottender');
const middlewares = require('./middlewares');
const actions = require('./actions');

module.exports = async function LOL() {
  return chain([middlewares, actions]);
};
