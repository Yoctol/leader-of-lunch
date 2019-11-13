import render from '../../views/render';

export default async function ElectionsCreate(context) {
  const channel = context.channel;
  const restaurants = channel.restaurants;
  const election = await channel.lastOrCreateElection();

  const randomRestaurantCount = 4 - election.options.length
  await election.addRandomRestaurants(restaurants, randomRestaurantCount);
  return render('elections/show', { election });
}
