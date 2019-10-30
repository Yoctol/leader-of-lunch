import render from '../render';
export default async function ElectionsShow(context) {
  // get last election in this channel
  const election = await context.channel.lastElection();

  if (election === null) {
    return render(context);
  }

  const options = await election.options.sort(function(a, b) {
    return a.votes.length < b.votes.length ? 1 : -1;
  });
  return render('elections/show', { options });
}
