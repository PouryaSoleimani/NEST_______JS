import { Module } from "@nestjs/common";
import { UsersController } from "./user.controller";
import { UsersService } from "./user.service";
import { UsersRepository } from "./user.repo";
import { ArticlesService } from "src/articles/articles.service";

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  imports: [],
  exports: [UsersService],
})
export class UsersModule {}
