import { Entity, ManyToOne } from 'typeorm';
import Base from './Base';
import Channel from './Channel';
import User from './User';

@Entity()
export default class ChannelUser extends Base {
  @ManyToOne(type => User, user => user.channelUsers)
  user: Promise<User>;

  @ManyToOne(type => Channel, channel => channel.channelUsers)
  channel: Promise<Channel>;
}
