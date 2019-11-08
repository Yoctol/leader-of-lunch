import { Entity, ManyToOne, OneToMany, Column } from 'typeorm';
import Base from './Base';
import Restaurant from './Restaurant';
import Election from './Election';
import Vote from './Vote';

@Entity()
export default class Option extends Base {
  @Column({ nullable: false })
  index: number;

  @ManyToOne(type => Restaurant, restaurant => restaurant.options, { nullable: false, eager: true })
  restaurant: Restaurant;

  @ManyToOne(type => Election, election => election.options, { nullable: false })
  election: Election;

  @OneToMany(type => Vote, vote => vote.option, { eager: true })
  votes: Vote[];
}
