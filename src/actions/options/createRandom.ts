import render from '../../views/render';

// 吃別的
export default async function OptionsCreateRandom(context) {
  const channel = context.channel;
  const restaurants = channel.restaurants;
  const election = await channel.lastOrCreateElection();

  await election.addRandomRestaurants(restaurants, 2);
  return render('elections/show', { election });
}