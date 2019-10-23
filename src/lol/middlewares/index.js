const { chain } = require('bottender');
const { router, route } = require('bottender/router');

const addModels = require('./addModels');
const line = require('./line');
const telegram = require('./telegram');
const slack = require('./slack');

function platform(platform_name, action) {
  return route(context => context.platform == platform_name, action);
}

module.exports = chain([
  addModels,
  router([
    platform('line', line),
    platform('slack', slack),
    platform('telegram', telegram),
  ]),
]);
