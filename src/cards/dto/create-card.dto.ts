import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class CreateCarDto {
  @ApiProperty()
  @IsString()
  title: string

  @ApiProperty()
  @IsString()
  color: string

  @ApiProperty()
  @IsString()
  make: string

  @ApiProperty()
  @IsString()
  brand: string

  @ApiProperty()
  @IsString()
  horsePower: number

  @ApiProperty()
  @IsString()
  serial: string
}
