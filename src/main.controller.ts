import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  @Get()
  getAllDatas() {
    return {
      message: "HELLO FROM NEST__JS",
      data: { id: 1, name: "POURYA", job: "DEVELOPER" },
    };
  }
}
