const getNumber = (text)=>{
  switch (text) {
    case "1":
    case "one":
      return 1;
    case "2":
    case "two":
      return 2;
    case "3":
    case "three":
      return 3;
    case "4":
    case "four":
      return 4;
    default:
      return 0;
  }
}

module.exports = async function VotesCreate(context, {next, params}){
  const n = getNumber(context.text)
  if(n == 0){
    return await context.sendText(`voteCreate 壞了`);
  }
  console.log(1)
  const election = await context.channel.lastElection()
  console.log(2)
  const option = await election.option(n)
  console.log(3)
  const restaurant = await option.restaurant().fetch()
  console.log(4)
  const lastVote = await context.user.lastVote()
  console.log(5)
  let lastVoteOption = null
  if(lastVote != null)
    lastVoteOption = await lastVote.electionOption().fetch()

  if(lastVoteOption === null || lastVoteOption.attributes.election_id != election.attributes.id){
    // create vote
    await option.votes().create({ user_id: context.user.attributes.id })
    await context.sendText(`${context.user.attributes.name}說他想吃${restaurant.attributes.name}`);
  }else{
    // update vote
    await lastVote.save({ election_option_id: option.attributes.id })
    await context.sendText(`${context.user.attributes.name}說他改吃${restaurant.attributes.name}`);
  }

}