import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { SingleUserDTO } from "./user.dto";
import { _Users } from "./../../__data__/db.js";
@Controller("/api")
export class UserController {
  @Get("/users")
  getAllUser() {
    return "HELLO FROM USERS";
  }

  @Get("/users/:id")
  getSingleUser() {
    return "SINGLE USER ROUTE";
  }

  @Post("/users/:id")
  PostSingleUser(@Body() single_user_body: SingleUserDTO, @Param("id") single_user_param) {
    _Users.push(single_user_body);
    return {
      ok: true,
      message: "SINGLE USER POST ROUTE",
      data: single_user_body,
      allUsers: _Users,
      param: single_user_param,
    };
  }
}
