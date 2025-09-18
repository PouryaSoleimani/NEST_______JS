// ? MAIN CONTROLLER
import { Controller, Get } from "@nestjs/common";
@Controller()
export class AppController {
  @Get()
  getAllDatas() {
    return {
      message: "HELLO FROM NEST JS",
      data: [],
    };
  }
}
