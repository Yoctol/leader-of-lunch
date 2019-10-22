const { router, platform } = require('bottender/router');

const createTelegram = require('./createTelegram')
const createLine = require('./createLine')
const createText = require('./createText')

async function createRestaurant(context, name){
  try {
    const deletedRestaurants = await context.channel.restaurants().where({ name }).fetchOne({ softDelete: false, require: false })
    if(deletedRestaurants != null){
      await deletedRestaurants.save({ deleted_at: null });
    }else{
      await context.channel.restaurants().create({name})
    }
    return {
      name,
      success: true
    };
  } catch (error) {
    console.log(error)
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
    platform('line', createLine ),
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