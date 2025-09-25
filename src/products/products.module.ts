import { ProductsController } from './products.controller';
import { Module } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { ProductsRepository } from "./products.repository";

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [ProductsService, ProductsRepository], // چیزهایی که INJECTABLE هستند
  exports: [],
})
export class ProductsModuleModule { }
