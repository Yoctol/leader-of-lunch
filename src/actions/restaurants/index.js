const render = require('../render');

module.exports = async function RestaurantsIndex(context) {
  const restaurants = await context.channel.restaurantNames();
  return render('restaurants/index', { restaurants });
};
