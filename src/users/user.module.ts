import { Module } from "@nestjs/common";
import { UsersController } from "./user.controller";
import { UsersService } from "./user.service";
import { UsersRepository } from "./user.repo";
import { ProductsService } from "src/products/products.service";
import { ProductsModule } from "src/products/products.module";

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersService],
  imports: [ProductsModule],
})
export class UsersModule { }
