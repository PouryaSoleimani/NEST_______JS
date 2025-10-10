import { PrismaModule } from './../prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
// import { PrismaModule } from './../prisma/prisma.module';
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { ArticlesController } from "./articles/articles.controller";
import { ArticlesService } from "./articles/articles.service";
import { ArticlesRepository } from "./articles/articles.repository";
import { ProductsController } from "./products/products.controller";
import { CategoriesController } from "./categories/categories.controller";
import { ProductsService } from "./products/products.service";
import { ProductsRepository } from "./products/products.repository";
import { CategoriesService } from "./categories/categories.service";
import { CategoriesRepository } from "./categories/categories.repository";
import { PlayersController } from "./players/players.controller";
import { PlayersService } from "./players/players.service";
import { PlayersRepository } from "./players/players.repository";
import { PostsController } from "./posts/posts.controller";
import { PostsService } from "./posts/posts.service";
import { PostsRepository } from "./posts/posts.repository";
import { AtriclesModule } from "./articles/atricles.module";

@Module({
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    ArticlesController,
    PlayersController,
    PostsController
  ],
  imports: [PrismaModule, UsersModule,],
  providers: [
    UsersService,
    ProductsService,
    ProductsRepository,
    AtriclesModule,
    ArticlesService,
    ArticlesRepository,
    CategoriesService,
    CategoriesRepository,
    PlayersService,
    PlayersRepository,
    PostsService,
    PostsRepository,
  ],
})
export class AppModule { }
