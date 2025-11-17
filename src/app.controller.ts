// ? MAIN CONTROLLER
import { Controller, Get, Render } from "@nestjs/common";
@Controller()
export class AppController {
  @Get()
  @Render("root")
  async getRoot() {
    return { text: "NEST JS TRAINING " };
  }
}
