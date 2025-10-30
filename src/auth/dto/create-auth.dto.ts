import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEnum, IsInt, IsString } from "class-validator";
import { ROLE } from "generated/prisma";

export class CreateAuthDto {
  @ApiProperty()
  @IsString()
  fullname: string;

  @ApiProperty()
  @IsInt()
  age: number;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsEnum(ROLE)
  role: ROLE;
}
