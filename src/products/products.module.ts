import { ProductsController } from "./products.controller";
import { Module } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { ProductsRepository } from "./products.repository";
import { ArticlesService } from "src/articles/articles.service";

@Module({
  imports: [ArticlesService],
  controllers: [ProductsController],
  providers: [ProductsService, ProductsRepository], // چیزهایی که INJECTABLE هستند
  exports: [ProductsService],
})
export class ProductsModuleModule {}
