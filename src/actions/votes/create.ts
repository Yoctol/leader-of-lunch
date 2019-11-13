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
  const votedOption = election.options.filter(option => option.index === n)[0]
  const result = await context.user.voteTo(election, votedOption)
  const userName = context.user.name.substring(0, 20) || '那個誰';
  if (result.isUpdate) {
    await context.sendText(`${userName}說他改吃${votedOption.restaurant.name.substring(0, 20)}`);
  } else {
    await context.sendText(`${userName}說他想吃${votedOption.restaurant.name.substring(0, 20)}`);
  }
};
