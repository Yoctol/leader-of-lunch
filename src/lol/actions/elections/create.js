const { router, platform } = require('bottender/router');
const createTelegram = require('./createTelegram');
const createLine = require('./createLine');
const createText = require('./createText');

function render(context, viewModel) {
  // view
  context.viewModel = viewModel;

  return router([
    platform('telegram', createTelegram),
    platform('line', createLine),
    platform('*', createText),
  ]);
}

module.exports = async function ElectionsCreate(context) {
  const election = await context.channel.elections().create();
  const restaurants = await context.channel
    .restaurants()
    .query(qb => {
      qb.select('*');
      qb.orderByRaw('random()').limit(4);
    })
    .fetch();

  // join to options
  for (let i = 0; i < restaurants.length; i++) {
    let sample = restaurants.models[i];
    await election
      .electionOptions()
      .create({ restaurant_id: sample.attributes.id, index: i + 1 });
  }

  const sampleNames = restaurants.map(restaurant => restaurant.attributes.name);

  return render(context, { restaurants: sampleNames });
};
