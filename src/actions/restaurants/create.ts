import render from '../render';
import Restaurant from '../../entity/Restaurant';
import ChannelRestaurant from '../../entity/ChannelRestaurant';

async function addRestaurant(channel, name) {
  const restaurant = await Restaurant.findOrCreateBy({ name });
  await ChannelRestaurant.findOrCreateBy({ restaurant, channel });
  return restaurant;
}

export default async function RestaurantsCreate(context, { match }) {
  const name = match.groups.name.trim();
  if (name === undefined) {
    return render('restaurants/create');
  }

  const restaurants = await Promise.all(
    name.split(/[/\s]+/).map(async function(name) {
      return await addRestaurant(context.channel, name);
    }),
  );

  return render('restaurants/create', { restaurants });
}
