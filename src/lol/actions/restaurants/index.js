const { router, platform } = require('bottender/router');

const indexTelegram = require('./indexTelegram')
const indexLine = require('./indexLine')
const indexText = require('./indexText')

function render(context, viewModel = {}){
  // view
  context.viewModel = viewModel;

  return router([
    platform('telegram', indexTelegram ),
    platform('line', indexLine ),
    platform('*', indexText ),
  ])
}

module.exports = async function RestaurantsIndex(context, {next, params}){
  const restaurants = await context.channel.restaurantNames()
  return render(context, { restaurants })
}