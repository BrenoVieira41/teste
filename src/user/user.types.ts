import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class User{

  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  password: string;

  @Field()
  email: string;

  @Field()
  bornDate: Date;

}