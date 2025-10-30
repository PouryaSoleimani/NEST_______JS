import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateAuthDto } from "./register-auth.dto";
import { IsEmail, IsString } from "class-validator";

export class LoginAuthDto extends PartialType(CreateAuthDto) {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;
}
