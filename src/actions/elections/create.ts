import render from '../render'
import Election from '../../entity/Election'
import Option from '../../entity/Option'
import ChannelRestaurant from '../../entity/ChannelRestaurant'

export default async function ElectionsCreate(context) {
  const channel = context.channel
  const election = new Election()
  election.channel = channel
  await election.save()

  //get random 4 restaurants
  const channelRestaurants = await ChannelRestaurant
    .createQueryBuilder('cr')
    .leftJoinAndSelect("cr.restaurant", "restaurant")
    .where('"cr"."channelId" = :channelId', { channelId: channel.id } )
    .orderBy('random()')
    .limit(4)
    .getMany()

  const restaurants = channelRestaurants.map((cr) => { return cr.restaurant })
  console.log(restaurants)

  // join to options
  const options = []
  for(let i = 0; i < restaurants.length ; i++){
    let restaurant = restaurants[i]
    console.log(restaurant)
    var option = new Option()
    option.restaurant = restaurant
    option.election = election
    option.index = i + 1
    options.push(option)
    await option.save()
  }

  return render('elections/create', { options })
};
