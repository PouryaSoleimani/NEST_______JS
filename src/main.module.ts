import { Module } from "@nestjs/common";
import { AppController } from "./main.controller";
import { UsersController } from "./users/user.controller";
import { PostsController } from "./posts/posts.controller";
import { CategoriesController } from "./categories/categories.controller";
import { ProductsController } from "src/products/products.controller";
import { ProductsService } from "src/products/products.service";
import { ProductsRepository } from "src/products/products.repository";
import { UsersService } from "./users/user.service";
import { UsersRepository } from "./users/user.repo";
import { ArticlesController } from "./articles/articles.controller";
import { ArticlesService } from "./articles/articles.service";
import { ArticlesRepository } from "./articles/articles.repository";

@Module({
  controllers: [
    AppController,
    UsersController,
    PostsController,
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
  ],
})
export class MainModule {}
