import Vote from '../../entity/Vote'

const getNumber = text => {
  if (text.startsWith('one')) {
    return 1;
  }
  if (text.startsWith('two')) {
    return 2;
  }
  if (text.startsWith('three')) {
    return 3;
  }
  if (text.startsWith('four')) {
    return 4;
  }
  const n = Number.parseInt(text);
  if(isNaN(n)){
    return 0;
  }
  return n;
};

export default async function VotesCreate(context) {
  const n = getNumber(context.text);
  if (n == 0) {
    return await context.sendText(`voteCreate 壞了`);
  }

  const election = await context.channel.lastElection();
  const pickedOption = election.options.filter(option => option.index === n)[0]
  const lastVote = await context.user.lastVote();
  const userName = context.user.name || '那個誰';

  if (election.options.map((o)=>{return o.id }).includes(lastVote?.option?.id)) {
      // update vote
    lastVote.option = pickedOption
    await lastVote.save()
    await context.sendText(`${userName}說他改吃${pickedOption.restaurant.name}`);
  } else {
    // create vote
    const vote = new Vote()
    vote.user = context.user
    vote.option = pickedOption
    await vote.save()
    await context.sendText(`${userName}說他想吃${pickedOption.restaurant.name}`);
  }
};
