import { Injectable } from "@nestjs/common";
import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

@Injectable()
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
@Injectable()
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
