
const render = require('../render');

async function createRestaurant(context, name) {
  try {
    const deletedRestaurants = await context.channel
      .restaurants()
      .where({ name })
      .fetchOne({ softDelete: false, require: false });
    if (deletedRestaurants != null) {
      await deletedRestaurants.save({ deleted_at: null });
    } else {
      await context.channel.restaurants().create({ name });
    }
    return {
      name,
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      name,
      success: false,
    };
  }
}

module.exports = async function RestaurantsCreate(context, { match }) {
  const name = match.groups.name.trim();
  if (name === undefined) {
    return render(context);
  }

  const restaurants = await Promise.all(
    name.split(/[/\s]+/).map(async function(name) {
      return await createRestaurant(context, name);
    })
  );

  return render('restaurants/create', { restaurants });
};
