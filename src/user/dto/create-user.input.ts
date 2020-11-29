import { InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

@InputType()
export class CreateUserInput {

  @IsString()
  @IsNotEmpty({message: 'Ops... este campo e necessário'})
  name: string;

  @IsEmail()
  @IsNotEmpty({message: 'Ops... este campo e necessário'})
  email: string;

  @IsString()
  @IsNotEmpty({message: 'Ops... este campo e necessário'})
  password: string;

  
  @IsNotEmpty({message: 'Ops... este campo e necessário'})
  bornDate: Date;
}