import Option from '../../entity/Option'

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

export default async function VotesCreate(context) {
  const n = getNumber(context.text);
  if (n == 0) {
    return await context.sendText(`voteCreate 壞了`);
  }

  const election = await context.channel.lastElection();
  const pickedOption = election.options.filter(option => option.index === n)[0]
  const lastVote: Option = await context.user.lastVote();
  const lastVoteOptionId = lastVote?.optionId

  const userName = context.user.name || '那個誰';

  if (election.options.map((o)=>{return o.id }).includes(lastVoteOptionId)) {
    // update vote
    lastVote.option = pickedOption
    await lastVote.save()
    await context.sendText(`${userName}說他改吃${pickedOption.restaurant.name}`);
  } else {
    // create vote
    await option.votes().create({ user_id: context.user.attributes.id });
    await context.sendText(`${userName}說他想吃${restaurant.attributes.name}`);
  }
};
