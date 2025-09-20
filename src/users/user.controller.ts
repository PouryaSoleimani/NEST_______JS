import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { SingleUserDTO } from "./user.dto";
import { _Users } from "./../../__data__/db.js";
@Controller("/api")
export class UserController {
  @Get("/users")
  getAllUser() {
    return {
      message: "ALL USERS ==GET== ROUTE",
      data: _Users,
    };
  }

  @Get("/users/:id")
  GET_SINGLE_USER(@Param("id") single_user_id) {
    const _User = _Users.find((item: SingleUserDTO) => item.id == single_user_id);
    return {
      message: _User ? "SINGLE USER ==GET== ROUTE" : "ERROR ...",
      user: _User ? _User : "USER NOT FOUND",
    };
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
