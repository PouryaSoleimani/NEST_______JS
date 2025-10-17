import { FriendsService } from "./friends.service";
import { FriendsController } from "./friends.controller";
/*
https://docs.nestjs.com/modules
*/

import { Module } from "@nestjs/common";

@Module({
  imports: [],
  controllers: [FriendsController],
  providers: [FriendsService],
})
export class FriendsModule {}
