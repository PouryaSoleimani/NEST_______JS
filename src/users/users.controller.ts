import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseInterceptors } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./users.pipe";
import { ApiProperty } from "@nestjs/swagger";
import { UserGetAllInteceptor, UserGetSingleInterceptor } from "./users.interceptor";

@Controller("/users")
export class UsersController {
  constructor(private service: UsersService) {}
  @UseInterceptors(UserGetAllInteceptor)
  @Get("/")
  GET__ALL__USERS() {
    const result = this.service.getAll();
    return result;
  }

  @Post("/create")
  CREATE__USER(@Body() body: CreateUserDto) {
    return this.service.create(body);
  }

  @UseInterceptors(UserGetSingleInterceptor)
  @Get("/:id")
  GET__SINGLE__USER(@Param("id", ParseIntPipe) id: number) {
    return this.service.getSingle(+id);
  }

  @ApiProperty()
  @Delete("/:id")
  DELETE__USER(@Param("id", ParseIntPipe) id: number) {
    return this.service.delete(id);
  }

  @Put("/:id")
  UPDATE__USER() {
    return "ALL USERS";
  }
}
