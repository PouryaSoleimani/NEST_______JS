import { Body, Controller, Get, Post } from "@nestjs/common";
import { FriendsService } from "./friends.service";
import { CreateSingleFriendDTO } from "./friends.pipe";

@Controller("/friends")
export class FriendsController {
  constructor(private readonly service: FriendsService) {}

  @Get("")
  getAll() {
    return this.service.getAll();
  }

  @Post("/create")
  create(@Body() body: CreateSingleFriendDTO) {
    return this.service.create(body);
  }
}
