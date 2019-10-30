import render from '../render';
import ChannelRestaurant from '../../entity/ChannelRestaurant';

export default async function RestaurantsIndex(context) {
  const channel = context.channel;
  const channelRestaurants = await ChannelRestaurant.find({ channel });
  const restaurants = channelRestaurants.map(channelRestaurant => channelRestaurant.restaurant);
  return render('restaurants/index', { restaurants });
}
