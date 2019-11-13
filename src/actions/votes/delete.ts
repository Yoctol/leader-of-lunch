export default async function VotesDelete(context) {
  const userName = context.user.name?.substring(0, 20) || '那個誰';

  const election = await context.channel.lastElection();
  const lastVote = await context.user.lastVote();

  if (lastVote == null){
    await context.sendText(`${userName}說他不吃`);
    return;
  }

  if (lastVote.option === null){
    await context.sendText(`${userName}說他不吃`);
    return;
  }

  if (!election.options.map((o)=> o.id).includes(lastVote?.option?.id)) return;
  await lastVote.remove();

  await context.sendText(`${userName}說他不吃惹`);
};
