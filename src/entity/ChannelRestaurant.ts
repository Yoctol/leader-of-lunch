import {Entity, ManyToOne } from "typeorm";
import Base from './Base'
import Channel from './Channel'
import Restaurant from './Restaurant'

@Entity()
export default class ChannelRestaurant extends Base {
  @ManyToOne(type => Restaurant, restaurant => restaurant.channelRestaurants, {
    eager: true
  })
  restaurant: Restaurant;

  @ManyToOne(type => Channel, channel => channel.channelRestaurants)
  channel: Promise<Channel>;
}
