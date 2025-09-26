import { Module } from "@nestjs/common";
import { ArticlesController } from "./articles.controller";
import { ArticlesService } from "./articles.service";
import { UsersService } from "src/users/user.service";

@Module({
  imports: [UsersService],
  controllers: [ArticlesController],
  providers: [ArticlesService], //^ STEP 2
})
export class AtriclesModule {}
