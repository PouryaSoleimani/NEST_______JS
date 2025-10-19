import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEnum, IsIn, IsInt, IsString } from "class-validator";
import { ROLE } from "generated/prisma";

export class CreateAuthDto {
  @ApiProperty()
  @IsString()
  full_name: string;

  @ApiProperty()
  @IsInt()
  age: number;

  @ApiProperty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsEnum(ROLE)
  role: ROLE;

  @ApiProperty()
  @IsEmail()
  email: string;
}
