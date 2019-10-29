import {Entity, Column, ManyToOne, OneToMany } from "typeorm";
import Base from './Base'
import Channel from './Channel';
import Option from './Option'

@Entity()
export default class Election extends Base{
  @ManyToOne(type => Channel, channel => channel.elections, { nullable: false })
  channel!: Promise<Channel>;

  @OneToMany(type => Option, option => option.election, {
    eager: true
  })
  options: Option;
}
