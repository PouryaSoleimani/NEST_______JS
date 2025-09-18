import { Controller, Get, Post } from "@nestjs/common";

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
  PostSingleUser() {
    const data = { id: 1, name: "POURYA", job: "DEVELOPER" };
    return {
      ok: true,
      message: "SINGLE USER POST ROUTE",
      data: data,
      id: "1",
    };
  }
}
