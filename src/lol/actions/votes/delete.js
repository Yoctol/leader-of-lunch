module.exports = async function VotesDelete(context) {
  const election = await context.channel.lastElection();
  const lastVote = await context.user.lastVote();
  if (lastVote == null) return;

  let lastVoteOption = await lastVote.electionOption().fetch();
  if (lastVoteOption === null) return;
  if (lastVoteOption.attributes.election_id != election.attributes.id) return;

  await lastVote.destroy();
  await context.sendText(`${context.user.attributes.name}說他不吃惹`);
};
