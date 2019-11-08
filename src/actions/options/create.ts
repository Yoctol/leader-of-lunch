import render from '../../views/render';

// 想吃 xxx
export default async function OptionsCreate(context, { match }) {
  const name = match.groups.name.trim();
  const election = await context.channel.lastOrCreateElection();
  const restaurant = await context.channel.addRestaurantByName(name);

  await election.addOption(restaurant);
  return render('elections/show', { election });
}