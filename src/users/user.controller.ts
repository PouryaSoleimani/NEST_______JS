import { Controller, Get } from "@nestjs/common";

@Controller()
export class UserController {
  @Get("/users")
  getAllUser() {
    return "HELLO FROM USERS";
  }
  @Get("/users/:id")
  getSingleUser() {
    return "SINGLE USER ROUTE";
  }
}
