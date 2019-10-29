import { BaseEntity, BeforeInsert, BeforeUpdate, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Type } from 'class-transformer';

export default class Base extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'int',
    width: 11,
    nullable: false,
    readonly: true,
    default: () => '0',
    transformer: {
      to: (value?: Date) => (!value ? value : Math.round(value.getTime() / 1000)),
      from: (value?: number) => (!value ? value : new Date(value * 1000))
    }
  })
  @Type(() => Date)
  createdAt: Date;

  @Column({
    type: 'int',
    width: 11,
    nullable: true,
    default: () => null,
    transformer: {
      to: (value?: Date) => (!value ? value : Math.round(value.getTime() / 1000)),
      from: (value?: number) => (!value ? value : new Date(value * 1000))
    }
  })
  @Type(() => Date)
  updatedAt?: Date;

  @BeforeInsert()
  updateDateCreation() {
    this.createdAt = new Date();
  }

  @BeforeUpdate()
  updateDateUpdate() {
    this.updatedAt = new Date();
  }


  static async findOrCreateBy(params) {
    let entity = await this.findOne(params)
    if(entity != null){
      return entity
    }

    entity = new this()
    Object.keys(params).forEach((key)=>{
      entity[key] = params[key]
    })
    await entity.save()
    return entity
  }
}