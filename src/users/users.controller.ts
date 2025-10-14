import { Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller("/users")
export class UsersController {
  constructor(private service: UsersService) {}

  @Get("/")
  GET__ALL__USERS() {
    const result = this.service.getAll();
    return result;
  }

  @Get("/:id")
  GET__SINGLE__USER() {
    return "ALL USERS";
  }

  @Post("/:id")
  CREATE__USER() {
    return "ALL USERS";
  }

  @Delete("/:id")
  DELETE__USER() {
    return "ALL USERS";
  }

  @Put("/:id")
  UPDATE__USER() {
    return "ALL USERS";
  }
}
