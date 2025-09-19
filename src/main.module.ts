import { Module } from "@nestjs/common";
import { AppController } from "./main.controller";
import { UserController } from "./users/user.controller";
import { PostsController } from "./posts/posts.controller";

@Module({
  controllers: [AppController, UserController, PostsController],
  imports: [],
})
export class MainModule {}
