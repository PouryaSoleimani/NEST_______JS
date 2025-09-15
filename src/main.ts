import { Controller, Get } from "@nestjs/common";

@Controller()
class AppController {
  @Get("/")
  getRootRoute() {
    return { message: "THE FIRST NEST__JS RESPONSE" };
  }
}
