import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import Base from './Base';
import Channel from './Channel';
import Option from './Option';
import Restaurant from './Restaurant';
import { sampleSize } from 'lodash';

@Entity()
export default class Election extends Base {
  index: number;

  @ManyToOne(type => Channel, channel => channel.elections, { nullable: false })
  channel: Channel;

  @OneToMany(type => Option, option => option.election, {
    eager: true,
  })
  options: Option[];

  async addOption(restaurant){
    const foundOption = await Option.findOne({
      restaurant,
      election: this
    })

    if(foundOption != null){
      return foundOption;
    }

    const option = await Option.build({
      restaurant,
      election: this,
      index: this.options.length + 1
    }) as Option;

    this.options.push(option);
    return option;
  }

  async addRandomRestaurants(restaurants, number){
    const optionRestaurantNames = this.options.map(option => option.restaurant.name);
    const availableRestaurants = restaurants.filter(restaurant => optionRestaurantNames.includes(restaurant.name) === false)
    const selectedRestaurants = sampleSize(availableRestaurants, number)

    for(const restaurant of selectedRestaurants){
      await this.addOption(restaurant)
    }
  }
}
