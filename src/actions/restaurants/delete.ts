import render from '../../views/render';
import Restaurant from '../../entity/Restaurant';
import ChannelRestaurant from '../../entity/ChannelRestaurant';

async function deleteRestaurant(channel, name) {
  const restaurant = await Restaurant.findOne({ name });
  if (restaurant == null) {
    return {
      name,
      success: false,
    };
  }

  const channelRestaurant = await ChannelRestaurant.findOne({ restaurant, channel });
  if (channelRestaurant == null) {
    return {
      name,
      success: false,
    };
  }
  try {
    await channelRestaurant.remove();
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

export default async function RestaurantsDelete(context, { match }) {
  const channel = context.channel;
  const name = match.groups.name.trim();
  if (name === undefined) {
    return render(context);
  }

  const restaurants = await Promise.all(
    name.split(/[/\s]+/).map(async function(name) {
      return await deleteRestaurant(channel, name);
    }),
  );

  return render('restaurants/delete', { restaurants });
}
