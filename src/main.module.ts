import { Module } from "@nestjs/common";
import { AppController } from "./main.controller";
import { UsersController } from "./users/user.controller";
import { UsersService } from "./users/user.service";
import { UsersRepository } from "./users/user.repo";
import { ArticlesController } from "./articles/articles.controller";
import { ArticlesService } from "./articles/articles.service";
import { ArticlesRepository } from "./articles/articles.repository";
import { ProductsController } from "./products/products.controller";
import { CategoriesController } from "./categories/categories.controller";
import { ProductsService } from "./products/products.service";
import { ProductsRepository } from "./products/products.repository";
import { CategoriesService } from "./categories/categories.service";
import { CategoriesRepository } from "./categories/categories.repository";

@Module({
  controllers: [
    AppController,
    UsersController,
    ProductsController,
    CategoriesController,
    ArticlesController,
  ],
  imports: [],
  providers: [
    ProductsService,
    ProductsRepository,
    UsersService,
    UsersRepository,
    ArticlesService,
    ArticlesRepository,
    CategoriesService,
    CategoriesRepository,
  ],
})
export class MainModule {}
