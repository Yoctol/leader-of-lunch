import {Entity, ManyToOne } from "typeorm";
import Base from './Base'
import Option from './Option';
import User from './User';

@Entity()
export default class Vote extends Base{
  @ManyToOne(type => Option, option => option.votes, { nullable: false, eager: true})
  option: Option;

  @ManyToOne(type => User, user => user.votes, { nullable: false })
  user!: Promise<User>;
}
