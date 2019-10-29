import {Entity, Column, OneToMany } from "typeorm";
import Base from './Base';
import ChannelRestaurant from './ChannelRestaurant';
import Option from './Option';

@Entity()
export default class Restaurant extends Base{
  @Column({unique: true})
  name!: string;

  @OneToMany(type => ChannelRestaurant, channelRestaurant => channelRestaurant.restaurant)
  channelRestaurants: Promise<ChannelRestaurant[]>;

  @OneToMany(type => Option, option => option.restaurant)
  options: Promise<Option[]>;
}
