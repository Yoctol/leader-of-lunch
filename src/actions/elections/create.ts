import render from '../../views/render';

export default async function ElectionsCreate(context) {
  const channel = context.channel;
  const restaurants = channel.restaurants;
  const election = await channel.lastOrCreateElection(6*60);

  const randomRestaurantCount = 4 - election.options.length
  await election.addRandomRestaurants(restaurants, randomRestaurantCount);
  return render('elections/show', { election });
}
