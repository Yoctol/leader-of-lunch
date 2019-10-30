import { Entity, Column, OneToMany } from 'typeorm';
import Base from './Base';
import Election from './Election';
import ChannelUser from './ChannelUser';
import ChannelRestaurant from './ChannelRestaurant';

@Entity()
export default class Channel extends Base {
  @Column({ unique: true })
  key!: string;

  @OneToMany(type => Election, election => election.channel)
  elections: Promise<Election[]>;

  @OneToMany(type => ChannelUser, channelUser => channelUser.channel)
  channelUsers: Promise<ChannelUser[]>;

  @OneToMany(type => ChannelRestaurant, channelRestaurant => channelRestaurant.channel)
  channelRestaurants: Promise<ChannelRestaurant[]>;

  async lastElection() {
    const election = await Election.find({
      where: {
        channel: this,
      },
      order: {
        id: 'DESC',
      },
      take: 1,
    });
    return election[0];
  }
}
