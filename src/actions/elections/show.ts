import render from '../render'
import Election from '../../entity/Election'
export default async function ElectionsShow(context) {
  // get last election in this channel

  const election = await context.channel.lastElection()


  if (election === null) {
    return render(context);
  }

  const options = await election.options

  // const restaurants = await context.models.Restaurant.where(
  //   'id',
  //   'in',
  //   options.models.map(option => option.attributes.restaurant_id)
  // ).fetchAll({ softDelete: false });
  // const votes = await context.models.Vote.where(
  //   'election_option_id',
  //   'in',
  //   options.models.map(o => o.attributes.id)
  // ).fetchAll();

  // const restaurantNames = votes
  //   .map(vote => options.find({ id: vote.attributes.election_option_id }))
  //   .map(option => restaurants.find({ id: option.attributes.restaurant_id }))
  //   .map(restaurant => restaurant.attributes.name)
  //   .concat(restaurants.map(restaurant => restaurant.attributes.name));

  // const groupedNames = _.countBy(restaurantNames);
  // const orderedNames = _.map(groupedNames, (count, name) => {
  //   return { name, count: count - 1 };
  // }).sort((a, b) => b.count - a.count);

  // return render('elections/show', { options: orderedNames });
};
