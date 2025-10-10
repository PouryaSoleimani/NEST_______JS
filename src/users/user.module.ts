import { Module } from "@nestjs/common";
import { UsersController } from "./user.controller";
import { UsersService } from "./user.service";
import { UsersRepository } from "./user.repo";
import { ProductsService } from "src/products/products.service";
import { ProductsModule } from "src/products/products.module";
import { ProductsRepository } from "src/products/products.repository";

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersRepository, ProductsService, ProductsRepository],
  exports: [UsersService],
  imports: [],
})
export class UsersModule { }
