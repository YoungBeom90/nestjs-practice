import {Column, Entity, PrimaryColumn} from 'typeorm';
import {CreateUserVo} from "./user.service";
import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType()
@Entity()
export class User {
  @Field(() => String)
  @PrimaryColumn()
  id: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => Date)
  @Column()
  birth: Date;

  @Field(() => String)
  @Column()
  phone: string;

  @Field(() => String)
  @Column()
  email: string;

  @Field(() => Date)
  @Column()
  createdAt: Date;

  @Field(() => String)
  @Column()
  createdBy: string;

  static create(vo: CreateUserVo) {
    const entity = new User();
    entity.id = vo.id;
    entity.name = vo.name;
    entity.birth = vo.birth;
    entity.phone = vo.phone;
    entity.email = vo.email;
    entity.createdAt = new Date();
    entity.createdBy = 'admin';
    return entity;
  }

}
