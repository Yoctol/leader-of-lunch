const _ = require('lodash')
const { router, platform } = require('bottender/router');

const showTelegram = require('./showTelegram')
const showText = require('./showText')

function render(context, viewModel = {}){
  // view
  context.viewModel = viewModel;

  return router([
    platform('telegram', showTelegram ),
    platform('*', showText ),
  ])
}

module.exports = async function ElectionsShow(context, {next, params}){
  // get last election in this channel
  const election = await context.channel.lastElection()
  if(election === null){
    return render(context)
  }

  const options = await context.models.ElectionOption
    .where({election_id: election.attributes.id})
    .fetchAll()
  const restaurants = await context.models.Restaurant
    .where('id', 'in', options.models.map(option => option.attributes.restaurant_id))
    .fetchAll()
  const votes = await context.models.Vote
    .where('election_option_id', 'in', options.models.map(o => o.attributes.id))
    .fetchAll()

  const restaurantNames = votes
    .map(vote => options.find({id: vote.attributes.election_option_id}))
    .map(option => restaurants.find({id: option.attributes.restaurant_id}))
    .map(restaurant => restaurant.attributes.name )
    .concat(restaurants.map(restaurant => restaurant.attributes.name))

  const groupedNames = _.countBy(restaurantNames)
  const orderedNames = _.map(groupedNames,(count, name) => { return { name, count: count - 1 }})
                       .sort((a,b) => b.count - a.count)

  return render(context, {options: orderedNames})

}