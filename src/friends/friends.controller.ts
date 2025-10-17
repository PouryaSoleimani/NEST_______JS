import { Body, Controller, Get, Post, UseInterceptors } from "@nestjs/common";
import { FriendsService } from "./friends.service";
import { CreateSingleFriendDTO } from "./friends.pipe";
import { FriendsCreateInterceptor, FriendsGetAllInterceptor } from "./friends.interceptor";

@Controller("/friends")
export class FriendsController {
  constructor(private readonly service: FriendsService) {}

  @UseInterceptors(FriendsGetAllInterceptor) // ADDING INTERCEPTOR HERE
  @Get("")
  getAll() {
    return this.service.getAll();
  }

  @UseInterceptors(FriendsCreateInterceptor)
  @Post("/create")
  create(@Body() body: CreateSingleFriendDTO) {
    return this.service.create(body);
  }
}
