import { Body, Controller, Get, Param, ParseIntPipe, Post, UseInterceptors } from "@nestjs/common";
import { FriendsService } from "./friends.service";
import { CreateSingleFriendDTO } from "./friends.pipe";
import { FriendsCreateInterceptor, FriendsGetAllInterceptor, FriendsGetSingleInterceptor } from "./friends.interceptor";

@Controller("/friends")
export class FriendsController {
  constructor(private readonly service: FriendsService) {}

  @UseInterceptors(FriendsGetAllInterceptor) // ADDING INTERCEPTOR HERE
  @Get("")
  getAll() {
    return this.service.getAll();
  }

  @UseInterceptors(FriendsGetSingleInterceptor)
  @Get("/:id")
  getSingle(@Param("id", ParseIntPipe) id: number) {
    return this.service.getSingle(id);
  }

  @UseInterceptors(FriendsCreateInterceptor)
  @Post("/create")
  create(@Body() body: CreateSingleFriendDTO) {
    return this.service.create(body);
  }
}
