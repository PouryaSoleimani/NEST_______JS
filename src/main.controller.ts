import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  @Get("/")
  getAllDatas() {
    return {
      message: "MY FIRST RETURN",
      data: [{ id: 1, name: "POURYA", job: " DEVELOPER " }],
    };
  }
}
