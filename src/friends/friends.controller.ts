import { Controller, Get } from "@nestjs/common";
import { FriendsService } from "./friends.service";

@Controller("/friends")
export class FriendsController {
  constructor(private readonly service: FriendsService) {}

  @Get("")
  getAll() {
    return this.service.getAll();
  }
}
