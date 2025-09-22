import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateSingleProductDTO {
  @IsOptional()
  @IsNumber()
  id: number;
  @IsString()
  title: string;
  @IsNumber()
  price: number;
  @IsBoolean()
  isAvailable: boolean;
}
export class UpdateSingleProductDTO {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsString()
  title: string;

  @IsNumber()
  price: number;

  @IsBoolean()
  isAvailable: boolean;
}
