// ? MAIN CONTROLLER
import { Controller, Get } from "@nestjs/common";
@Controller("/api")
export class AppController {
  @Get()
  getAllDatas() {
    return {
      message: "HELLO FROM NEST JS",
      data: [],
    };
  }
}
