module.exports = async function ElectionsCreate(context, {next, params}){
  const election = await context.channel.elections().create()
  const restaurants = await context.channel.restaurants().query((qb)=>{
    qb.select('*')
    qb.orderByRaw('random()').limit(4)
  }).fetch()

  // join to options
  for(let i = 0 ; i < restaurants.length ; i++){
    let sample = restaurants.models[i];
    await election.electionOptions().create({restaurant_id: sample.attributes.id, index: i+1});
  }

  const sampleNames = restaurants.map(restaurant => restaurant.attributes.name)
  await context.sendText(`想吃什麼\n${sampleNames.join('\n')}`);
}