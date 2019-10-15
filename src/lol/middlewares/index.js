const { chain } = require('bottender');
const { router, route } = require('bottender/router');

const addModels = require('./addModels');
const line = require('./line');
const telegram = require('./telegram');
const slack = require('./slack');

function platform(platform_name, action){
  return route(
    context => context.platform == platform_name,
    action
  )
}

module.exports = chain([
  addModels,
  async function(context, {next}){
    return router([
      platform('line', line.bind(null, context, {next})),
      platform('slack', slack.bind(null, context, {next})),
      platform('telegram', telegram.bind(null, context, {next})),
    ])
  }
])