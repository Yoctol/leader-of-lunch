import { Entity, Column, OneToMany } from 'typeorm';
import Base from './Base';
import Election from './Election';
import ChannelUser from './ChannelUser';
import ChannelRestaurant from './ChannelRestaurant';
import Restaurant from './Restaurant';

@Entity()
export default class Channel extends Base {
  @Column({ unique: true })
  key!: string;

  @OneToMany(type => Election, election => election.channel)
  elections: Promise<Election[]>;

  @OneToMany(type => ChannelUser, channelUser => channelUser.channel)
  channelUsers: Promise<ChannelUser[]>;

  @OneToMany(type => ChannelRestaurant, channelRestaurant => channelRestaurant.channel, {
    eager: true,
  })
  channelRestaurants: ChannelRestaurant[];

  get restaurants(){
    return this.channelRestaurants.map(cr => cr.restaurant)
  }

  async electionCount(){
    return await Election.count({channel: this})
  }

  async addRestaurantByName(name){
    const restaurant = await Restaurant.findOrCreateBy({ name });
    const cr = await ChannelRestaurant.findOrCreateBy({ restaurant, channel: this }) as ChannelRestaurant;
    if(!this.channelRestaurants.includes(cr)){
      this.channelRestaurants.push(cr);
    }
    return restaurant;
  }

  async lastElection() {
    const elections = await Election.find({
      where: {
        channel: this,
      },
      order: {
        id: 'DESC',
      },
      take: 1,
    });

    if(elections === null){
      return null;
    }

    const election = elections[0];
    if(election === null){
      return null;
    }

    election.index = await this.electionCount()
    return election;
  }

  async lastOrCreateElection(minutes = 60 * 6){
    const lastElection = await this.lastElection()
    if(lastElection != null){
      if(lastElection.createdAt.getTime() > new Date().getTime() - minutes * 1000 * 60){
        return lastElection;
      }
    }
    const election = new Election();
    election.channel = this;
    election.options = [];
    await election.save();

    election.index = await this.electionCount()
    return election;
  }
}
