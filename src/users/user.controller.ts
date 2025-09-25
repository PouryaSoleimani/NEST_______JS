import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotAcceptableException,
  NotFoundException,
  Param,
  Post,
} from "@nestjs/common";
import { CreateSingleUserDTO } from "src/users/users.pipe";
import { UsersService } from "./user.service";

@Controller("/api/users")
export class UsersController {
  constructor(public usersService: UsersService) {}

  @Get("/")
  async GET__ALL__USERS() {
    const result = this.usersService.GET__ALL__USERS();
    if (!result) {
      throw new NotAcceptableException(
        "THE REQUEST YOU ARE TRYING TO SEND IS NOT ACCEPTABLE",
      );
    } else {
      return result;
    }
  }

  @Get("/:id")
  GET__SINGLE__USERS(@Param("id") single_user_param: any) {
    const _user = this.usersService.GET__SINGLE__USER(+single_user_param);
    if (!_user) {
      throw new NotFoundException("USER NOT FOUND");
    }
    return _user;
  }

  @Post("/")
  async CREATE__SINGLE__USER(
    @Body()
    single_user_req_body: CreateSingleUserDTO,
  ) {
    const result = this.usersService.CREATE__SINGLE__USER(single_user_req_body);
    if (!result) {
      throw new BadRequestException("BAD REQUEST !!!");
    } else {
      return result;
    }
  }

  @Delete("/:id")
  async DELETE__SINGLE__USERS(@Param("id") single_user_id: any) {
    const result = this.usersService.DELETE__SINGLE__USER(single_user_id);
    if (!result) {
      throw new NotFoundException("USER NOT FOUND");
    } else {
      return result;
    }
  }
}
