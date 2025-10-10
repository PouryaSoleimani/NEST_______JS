import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
// import { PrismaModule } from './../prisma/prisma.module';
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { ArticlesController } from "./articles/articles.controller";
import { ArticlesService } from "./articles/articles.service";
import { ArticlesRepository } from "./articles/articles.repository";
import { ProductsController } from "./products/products.controller";
import { ProductsService } from "./products/products.service";
import { ProductsRepository } from "./products/products.repository";
import { PlayersController } from "./players/players.controller";
import { PlayersService } from "./players/players.service";
import { PlayersRepository } from "./players/players.repository";
import { AtriclesModule } from "./articles/atricles.module";
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  controllers: [
    AppController,
    ProductsController,
    ArticlesController,
    PlayersController,
  ],
  imports: [PrismaModule, UsersModule, AtriclesModule],
  providers: [
    PrismaService,
    UsersService,
    ProductsService,
    ProductsRepository,
    AtriclesModule,
    ArticlesService,
    ArticlesRepository,
    PlayersService,
    PlayersRepository,
  ],
})
export class AppModule { }
