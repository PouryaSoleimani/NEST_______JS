import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./users.pipe";

@Controller("/users")
export class UsersController {
  constructor(private service: UsersService) { }

  @Get("/")
  GET__ALL__USERS() {
    const result = this.service.getAll();
    return result;
  }

  @Post("/create")
  CREATE__USER(@Body() body: CreateUserDto) {
    return this.service.create(body)
  }

  @Get("/:id")
  GET__SINGLE__USER(@Param('id', ParseIntPipe) id: number) {
    return this.service.getSingle(+id)
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
