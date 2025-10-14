import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEnum, IsInt, IsString } from "class-validator";
import { ROLE } from "generated/prisma";

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  full_name: string

  @ApiProperty()
  @IsInt()
  age: number

  @ApiProperty()
  @IsString()
  password: string

  @ApiProperty()
  @IsEnum(ROLE)
  role: 'ADMIN' | 'USER'

  @ApiProperty()
  @IsEmail()
  email: string
}