import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateCarDto } from "./create-car.dto";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateCarDto extends PartialType(CreateCarDto) {
  @ApiProperty()
  @IsString()
  @IsOptional()
  title: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  color: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  make: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  brand: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  horsePower: number;
}
