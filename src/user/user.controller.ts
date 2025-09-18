import { Controller, Get } from "@nestjs/common";

@Controller()
export class UserController {
  @Get("/user")
  getAllUsers() {
    return "ALL USERS ROUTE";
  }
  @Get(`/user/:id`)
  getSingleUser() {
    return "SINGLE USER PAGE";
  }
}
