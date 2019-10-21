const { router, platform } = require('bottender/router');

const createTelegram = require('./createTelegram')
const createText = require('./createText')

async function createRestaurant(context, name){
  try {
    await context.channel.restaurants().create({name})
    return {
      name,
      success: true
    };
  } catch (error) {
    return {
      name,
      success: false
    };
  }
}

function render(context, viewModel = {}){
  // view
  context.viewModel = viewModel;

  return router([
    platform('telegram', createTelegram ),
    platform('*', createText ),
  ])
}

module.exports = async function RestaurantsCreate(context, {next, match}){
  const name = match.groups.name.trim();
  if(name === undefined) {
    return render(context);
  }

  const restaurants = await Promise.all(name.split(/[\/\s]+/).map(async function(name){
    return await createRestaurant(context,name);
  }));

  return render(context, { restaurants })
}