const getNumber = text => {
  if (text.startsWith('1') || text.startsWith('one')) {
    return 1;
  }
  if (text.startsWith('2') || text.startsWith('two')) {
    return 2;
  }
  if (text.startsWith('3') || text.startsWith('three')) {
    return 3;
  }
  if (text.startsWith('4') || text.startsWith('four')) {
    return 4;
  }
  return 0;
};

module.exports = async function VotesCreate(context) {
  const n = getNumber(context.text);
  if (n == 0) {
    return await context.sendText(`voteCreate 壞了`);
  }
  const election = await context.channel.lastElection();
  const option = await election.option(n);
  const restaurant = await option.restaurant().fetch();
  const lastVote = await context.user.lastVote();
  let lastVoteOption = null;
  if (lastVote != null)
    lastVoteOption = await lastVote.electionOption().fetch();

  const userName = context.user.attributes.name || '那個誰';

  if (
    lastVoteOption === null ||
    lastVoteOption.attributes.election_id != election.attributes.id
  ) {
    // create vote
    await option.votes().create({ user_id: context.user.attributes.id });
    await context.sendText(`${userName}說他想吃${restaurant.attributes.name}`);
  } else {
    // update vote
    await lastVote.save({ election_option_id: option.attributes.id });
    await context.sendText(`${userName}說他改吃${restaurant.attributes.name}`);
  }
};
