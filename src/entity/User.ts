import { Entity, OneToMany, Column } from 'typeorm';
import Base from './Base';
import Vote from './Vote';
import ChannelUser from './ChannelUser';

@Entity()
export default class User extends Base {
  @Column({ unique: true })
  key!: string;

  @Column({ nullable: true })
  name: string;

  @OneToMany(type => Vote, vote => vote.user)
  votes: Promise<Vote[]>;

  @OneToMany(type => ChannelUser, channelUser => channelUser.user)
  channelUsers: Promise<ChannelUser[]>;

  async lastVote() {
    const vote = await Vote.find({
      where: {
        user: this,
      },
      relations: ['option'],
      order: {
        id: 'DESC',
      },
      take: 1,
    });
    return vote[0];
  }

  async voteTo(election, votedOption) {
    const lastVote = await this.lastVote();
    if (election.options.map((o)=>{return o.id }).includes(lastVote?.option?.id)) {
      // update vote
      lastVote.option = votedOption
      await lastVote.save()
      return {
        isUpdate: true,
      }
    } else {
      // create vote
      const vote = new Vote()
      vote.user = this
      vote.option = votedOption
      await vote.save()
      return {
        isUpdate: false,
      }
    }
  }
}
