import {Entity, OneToMany, Column } from "typeorm";
import Base from './Base'
import Vote from './Vote';
import ChannelUser from './ChannelUser';

@Entity()
export default class User extends Base{
  @Column({unique: true})
  key!: string;

  @Column({ nullable: true })
  name: string;

  @OneToMany(type => Vote, vote => vote.user)
  votes: Promise<Vote[]>;

  @OneToMany(type => ChannelUser, channelUser => channelUser.user)
  channelUsers: Promise<ChannelUser[]>;

  async lastVote(){
    const vote = await Vote.find({
      select: ["optionId"]
      where: {
        user: this
      },
      order: {
        id: "DESC"
      },
      take: 1
    })
    return vote[0]
  }
}
