import render from '../../views/render';

// 想吃 xxx
export default async function OptionsCreate(context, { match }) {
  const name = match.groups.name.trim();
  const election = await context.channel.lastOrCreateElection();
  const restaurant = await context.channel.addRestaurantByName(name);
  const votedOption = await election.addOption(restaurant);
  const result = await context.user.voteTo(election, votedOption)
  const userName = context.user.name || '那個誰';
  if (result.isUpdate) {
    await context.sendText(`${userName}說他改吃${votedOption.restaurant.name}`);
  } else {
    await context.sendText(`${userName}說他想吃${votedOption.restaurant.name}`);
  }
  return render('elections/show', { election });
}