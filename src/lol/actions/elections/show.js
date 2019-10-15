const _ = require('lodash')

module.exports = async function ElectionsShow(context, {next, params}){
  // get last election in this channel
  const election = await context.channel.lastElection()
  if(election === null){
    await context.sendText("你要先吃飯嗎？");
    return
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

  const groupedNames = _.countBy(restaurantNames)
  const orderedNames = _.map(groupedNames,(count, name) => { return { name, count }})
                       .sort((a,b) => b.count - a.count)

  const result = orderedNames.map(o => `${o.name}: ${o.count}`).join('\n')
  await context.sendText(`票選統計結果：\n${result}`);
}